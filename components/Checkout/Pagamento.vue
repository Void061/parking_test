<template>
    <section class="mt-[58px] container mx-auto px-[20px] md:px-[81px]">
        
        <h2 class="font-bold text-[36px] text-secondary">Scegli il metodo di pagamento</h2>
       
        <div v-if="loading" class="pb-[131px] mt-[54px] flex flex-col border-t-[1px] border-solid border-[#B4B4B4]">
            
            <label @click="setupStripe()" class="cursor-pointer h-[90px] border-[1.5px] px-[10px] md:px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex items-center gap-[52px]">
                   <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[14px] md:text-[20px]">Paga con Stripe</h4>
                </div>
                <div class="flex">
                    <img class="h-auto max-h-[50px]" src="/img/Stripe.png" alt="Stripe" />
                </div>
            </label> 
            <no-ssr>
            <div id="stripe-pagamento" class=" xl:mx-[25%] hidden flex-col mt-[48px] ">
                <StripeCheckout
      ref="checkoutRef"
      mode="payment"
      :pk="apikey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
                <button class="mt-4 py-4 px-4 rounded-[10px] text-white bg-[#6F68FF]" @click="submit">PROCEDI AL PAGAMENTO</button>
            </div>
            </no-ssr>
        

           
            <label @click="setupPaypal()" class="cursor-pointer h-[90px] border-[1.5px] md:px-[40px] px-[10px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex items-center gap-[52px]">
                    <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[14px] md:text-[20px]">Paga con il tuo conto Paypal</h4>
                </div>
                <div class="flex">
                    <img src="/img/paypal_logo.png" alt="cards" />
                </div>
            </label>   
            
            <div id="paypal-pagamento" class="mt-[78px] hidden">
                <no-ssr>
            <paypal-checkout
                :amount="this.prezzo"
                currency="EUR"
                :client="credentials"
                env="sandbox"
                :button-style="myStyle"
                v-on:payment-authorized="paymentAuthorized"
                v-on:payment-completed="paymentCompleted"
                v-on:payment-cancelled="paymentCancelled">
            </paypal-checkout>
                </no-ssr>
            </div>
            <!--<button @click="Pay()" class="rounded-[11px] py-[21px] bg-primary mt-[78px]"><h3 class="text-[24px] text-secondary font-semibold">CONFERMA E PAGA</h3></button>-->
        </div>
    </section>
</template>

<script>

    export default{
    
        props: ['ricevuta', 'marca', 'ingresso', 'uscita', 'ora_uscita', 'ora_ingresso', 'nazione', 'provincia', 'indirizzo',
         'citta', 'cap', 'piva', 'comune', 'societa', 'datoinvio','modinvio' , 'ragionesociale' , 'v','prezzo', 'vt', 'dataInizio', 'dataFine','nome', 'cognome', 'mail', 'targa', 'fattura', 'modello', 'msg', 'telefono'],
         components: {
            
  },
        methods: {
            async init(){
                
             const key = this.$axios.$get('/prenotazione/stripePrice?CategoriaId='+this.vt+'&SedeId=1&dataInizio='+new Date(this.dataInizio).getTime()+'&dataFine='+new Date(this.dataFine).getTime()).then(data => {
                  this.lineItems[0].price = data.price.id;
                 this.successURL = "http://localhost:3000/check_payment?CategoriaId="+this.vt+"&dataInizio="+new Date(this.dataInizio).getTime()+"&dataFine="+new Date(this.dataFine).getTime()+"&SedeId=1&Nome="+this.nome+"&Cognome="+this.cognome+"&Telefono="+this.telefono+"&Mail="+this.mail+"&Modello="+this.modello+"&Targa="+this.targa+"&Messaggio="+this.msg+"&Prezzo="+this.Prezzo+"&Veicolo="+this.v+"&Fattura="+this.fattura+"&Nazione="+this.nazione+"&mod_invio="+this.mod_invio+"&dato_invio="+this.dato_invio+"&RagioneSociale="+this.ragionesociale+"&Provincia="+this.provincia+"&Comune="+this.comune+"&Indirizzo="+this.indirizzo+"&City="+this.citta+"&Cap="+this.cap+"&Piva="+this.piva+"&NomeSocieta="+this.societa+"&ora_uscita="+this.ora_uscita+"&ora_ingresso="+this.ora_ingresso+"&ingresso="+this.ingresso+"&uscita="+this.uscita+"&marca="+this.marca+"&ricevuta="+this.ricevuta+"&fatturaEmessa="+this.ricevuta+"&ricevutaEmessa="+this.fattura+"&payment_method=stripe&session_id={CHECKOUT_SESSION_ID}";
                 this.loading = true;
             })
            
             
            
            },
         
         submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    tokenCreated (token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
       
          
            paymentAuthorized(value){
                
            },
            async paymentCompleted(value){
               //value contiene tutte le info della transazione
               
               if(this.fattura){}
                const Save = await this.$axios.$post('/prenotazione/acquisizione', {
                    "CategoriaId": this.vt,
                    "dataInizio": this.dataInizio,
                    "dataFine" : this.dataFine,
                    "SedeId": 1,
                    "Nome":this.nome,
                    "Cognome":this.cognome,
                    "Telefono": this.telefono,
                    "Mail": this.mail,
                    "Modello": this.modello,
                    "Targa": this.targa,
                    "Messaggio": this.msg,
                    "Prezzo": this.prezzo,
                    "Veicolo": this.v,
                    "Fattura" : this.fattura,
                    "Nazione" : this.nazione,
                    "mod_invio" : this.modinvio,
                    "dato_invio": this.datoinvio,
                    "RagioneSociale" : this.ragionesociale,
                    "Provincia" :this.provincia ,
                    "Comune" : this.comune,
                    "Indirizzo" : this.indirizzo,
                    "City" : this.citta,
                    "Cap" : this.cap,
                    "Piva" : this.piva,
                    "NomeSocieta" : this.societa,
                    "paypal": value, // NOT IN STRIPE
                    "ora_uscita": this.ora_uscita,
                    "ora_ingresso": this.ora_ingresso,
                    "ingresso": this.ingresso,
                    "uscita": this.uscita,
                    "marca": this.marca,
                    "ricevuta" : this.ricevuta,
                    "fatturaEmessa": this.ricevuta, //E' per dire che non serve la fattura se ricevuta ?? 1
                    "ricevutaEmessa": this.fattura, //E' per dire che non serve la ricevuta se fattura ?? 1
                    "payment_method" : "paypal",

                }).then(function(response){
                    
                    $nuxt.$router.push('/thankyou')
                }).catch(function(e){console.log(e)})
            },
            paymentCancelled(value){
                
            },
            setupPaypal(){
                /*
                document.querySelectorAll('.paypal-button-shape-pill').style.paddingTop = '21px';
                document.querySelectorAll('.paypal-button-shape-pill').style.paddingBottom = '21px';
                document.querySelectorAll('.paypal-button-shape-pill').style.borderRadius = '11px';
                */
                document.getElementById('paypal-pagamento').classList.remove('hidden');
                document.getElementById('stripe-pagamento').classList.add('hidden');
                document.getElementById('stripe-pagamento').classList.remove('flex');
            },

        setupStripe(){
            document.getElementById('stripe-pagamento').classList.remove('hidden');
            document.getElementById('stripe-pagamento').classList.add('flex');
            document.getElementById('paypal-pagamento').classList.add('hidden');
        },
    },

        async mounted(){
            if(process.client){
                //const Paypal = () => import('vue-paypal-checkout');
                //const Stripe = () => import('@vue-stripe/vue-stripe');
                 await this.init();
                 
                
          }

       


       
        },
        data(){
            return{
                apikey: this.$config.stripeApiKey,
                token: null,
                loading: false,
                successURL: 0,
      cancelURL: 'http://localhost:3000/#',
                lineItems: [
        {
          price: '', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
              
                credentials: {
                    sandbox: 'ATnGXc13L0XiO0HvGsPIF4jVHFoWDFMZOyw5wzxwGWAxcuKneS_RL86UvVStZO1YeThjkcyaaaVQSrwL',
                    production: '',
                },
                experienceOptions: {
                    input_fields: {
                        no_shipping: 1,
                    },
                },
                myStyle: {
                    label: 'checkout',
                    size: 'responsive',
                  
                }
            

            }
        },
        
    }
</script>
<style>
label h4{
    transition: .2s all;
}
label input:checked ~ h4{
    color: #143793;
}



</style>