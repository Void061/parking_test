<template>
    <section class="mt-[58px] container mx-auto px-[20px] md:px-[81px]">
        
        <h2 class="font-bold text-[36px] text-secondary">Scegli il metodo di pagamento</h2>
        <div class="pb-[131px] mt-[54px] flex flex-col border-t-[1px] border-solid border-[#B4B4B4]">
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[10px] md:px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex items-center gap-[52px]">
                   <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[14px] md:text-[20px]">Paga con Stripe</h4>
                </div>
                <div class="flex">
                    <img class="h-auto max-h-[50px]" src="/img/Stripe.png" alt="Stripe" />
                </div>
            </label>  
           
            
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[10px] md:px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex items-center gap-[52px]">
                   <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[14px] md:text-[20px]">Paga con carta</h4>
                </div>
                <div class="flex">
                    <img class="md:h-auto h-[15px]" src="/img/credit_cards.png" alt="cards" />
                </div>
            </label> 
            <label @click="SetupPaypal()" class="cursor-pointer h-[90px] border-[1.5px] md:px-[40px] px-[10px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
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
       
       
        props: ['nazione', 'provincia', 'indirizzo', 'citta', 'cap', 'piva', 'comune', 'societa', 'modinvio' , 'ragionesociale' , 'v','prezzo', 'vt', 'dataInizio', 'dataFine','nome', 'cognome', 'mail', 'targa', 'fattura', 'modello', 'msg', 'telefono'],
        methods: {
         
       
          
            paymentAuthorized(value){
                
            },
            async paymentCompleted(value){
               //value contiene tutte le info della transazione
               
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
                    "RagioneSociale" : this.ragionesociale,
                    "Provincia" :this.provincia ,
                    "Comune" : this.comune,
                    "Indirizzo" : this.indirizzo,
                    "City" : this.citta,
                    "Cap" : this.cap,
                    "Piva" : this.piva,
                    "NomeSocieta" : this.societa,
                    "paypal": value,

                }).then(function(response){
                    
                    $nuxt.$router.push('/thankyou')
                }).catch(function(e){console.log(e)})
            },
            paymentCancelled(value){
                
            },
            SetupPaypal(){
                /*
                document.querySelectorAll('.paypal-button-shape-pill').style.paddingTop = '21px';
                document.querySelectorAll('.paypal-button-shape-pill').style.paddingBottom = '21px';
                document.querySelectorAll('.paypal-button-shape-pill').style.borderRadius = '11px';
                */
                document.getElementById('paypal-pagamento').classList.remove('hidden');
                //Hidden cards
            }
        },

        mounted(){
            if(process.client){
                
                const Paypal = () => import('vue-paypal-checkout');
                
                
          }

       
        },
        data(){
            return{
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