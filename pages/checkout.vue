<template>
    <div>
        <CheckoutInfo :nome="this.nome" :cognome="this.cognome" :mail="this.mail" :telefono="this.telefono" :targa="this.targa" :modello="this.modello" :fattura="this.fattura" :msg="this.msg" />
        

            <CheckoutPagamento v-if="loading" :ricevuta="this.ricevuta" :ora_ingresso="ora_ingresso" :ora_uscita="ora_uscita" :uscita="df_convertita" :ingresso="di_convertita" :datoinvio="dt_send" :indirizzo="this.indirizzo" :citta="this.citta" :cap="this.cap" :piva="this.piva" :comune="this.comune" :societa="this.societa" :modinvio="this.modinvio" :ragionesociale="this.ragionesociale" :provincia="this.provincia"  :nazione="this.nazione" :v="this.v" :prezzo="this.prezzo" :vt="this.vt" :dataInizio="this.dataInizio" :dataFine="this.dataFine" :nome="this.nome" :cognome="this.cognome" :mail="this.mail" :telefono="this.telefono" :targa="this.targa" :modello="this.modello" :marca="this.marca" :fattura="this.fattura" :msg="this.msg"/>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nome: '',
                cognome: '',
                modello: '',
                mail: '',
                telefono: '',
                targa: '',
                fattura: 0,
                prezzo: 0,
                msg: '',
                vt : '',
                v: '',
                dataInizio: '',
                dataFine: '',
                sede: 1,
                dt_send: '',
                societa: '',
                nazione: '',
                modinvio: '',
                ragionesociale: '',
                provincia : '',
                comune: '',
                indirizzo: '',
                citta: '',
                cap: '',
                piva: '',
                di_convertita: '',
                df_convertita: '',
                ora_uscita: '',
                ora_ingresso: '',
                marca: '',
                ricevuta: '',
                loading: false,
            }
        },

        async mounted(){
            

            if(this.$route.query.of == "" || this.$route.query.of == undefined || this.$route.query.oi == "" || this.$route.query.oi == undefined || 
            this.$route.query.df == "" || this.$route.query.df == undefined || 
            this.$route.query.di == "" || this.$route.query.di== undefined || this.$route.query.n == "" || this.$route.query.n == undefined || 
            this.$route.query.c == "" || this.$route.query.c == undefined || 
                this.$route.query.m == "" || this.$route.query.m == undefined || this.$route.query.tel == "" || this.$route.query.tel == undefined
                || this.$route.query.tg == "" || this.$route.query.tg == undefined || this.$route.query.md == "" || this.$route.query.md == undefined
                || this.$route.query.f == "" || this.$route.query.f == undefined || this.$route.query.vt == "" || this.$route.query.vt == undefined
                || this.$route.query.v == "" || this.$route.query.v == undefined || this.$route.query.marca == "" || this.$route.query.marca == undefined 
                || this.$route.query.ricevuta == "" || this.$route.query.ricevuta == undefined
            ){this.$router.push('/prenotazione')}


            this.nome = this.$route.query.n;
            this.cognome = this.$route.query.c;
            this.mail = this.$route.query.m;
            this.telefono = this.$route.query.tel;
            this.targa = this.$route.query.tg;
            this.modello = this.$route.query.md;
            this.fattura = this.$route.query.f;
            this.msg = this.$route.query.msg;
            this.vt = this.$route.query.vt;
            this.v = this.$route.query.v;
            this.marca = this.$route.query.marca;
            this.ricevuta = this.$route.query.ricevuta;

            if(this.$route.query.f == 1 || this.$route.query.f == "1"){

                
                if(this.$route.query.nat == "" || this.$route.query.nat == undefined){
                      this.$router.push('/prenotazione');
                  }
                  else if(this.$route.query.nat == "Italy"){
                      if(this.$route.query.nat == undefined || this.$route.query.md_send == "" || this.$route.query.md_send == undefined
                   || this.$route.query.rag_it == "" || this.$route.query.rag_it == undefined || this.$route.query.prv == "" || 
                   this.$route.query.prv == undefined
                   || this.$route.query.com == "" || this.$route.query.com == undefined || this.$route.query.ind == "" || 
                   this.$route.query.ind == undefined
                   || this.$route.query.ind == "" || this.$route.query.ct_it == "" || this.$route.query.ct_it == undefined || 
                   this.$route.query.cap == "" ||
                   this.$route.query.cap == undefined || this.$route.query.p_it == "" || this.$route.query.p_it == undefined){
                       this.$router.push('/prenotazione');
                  }
                   }
                   else{
                       if(this.$route.query.p_it == "" || this.$route.query.p_it == undefined
                          || this.$route.query.ct_it == "" || this.$route.query.ct_it == undefined
                          || this.$route.query.rag_it == "" || this.$route.query.rag_it == undefined
                          || this.$route.query.nf == "" || this.$route.query.nf == undefined
                         ){
                          this.$router.push('/prenotazione');
                       }
                   }
            }
            this.nazione = this.$route.query.nat;
            this.modinvio = this.$route.query.md_send;
            this.ragionesociale = this.$route.query.rag_it;
            this.provincia = this.$route.query.prv;
            this.comune = this.$route.query.com;
            this.indirizzo = this.$route.query.ind;
            this.citta = this.$route.query.ct_it;
            this.cap = this.$route.query.cap;
            this.piva = this.$route.query.p_it;
            this.societa = this.$route.query.nf;
            this.dt_send = this.$route.query.dt_send;
            this.dataInizio = new Date(this.$route.query.di + " " + this.$route.query.oi)
            this.dataFine = new Date(this.$route.query.df + " " + this.$route.query.of)
            this.di_convertita = new Date(this.$route.query.di).toLocaleString('it-IT').split(',')[0];
            this.df_convertita = new Date(this.$route.query.df).toLocaleString('it-IT').split(',')[0];
            this.ora_ingresso = this.$route.query.oi;
            this.ora_uscita = this.$route.query.of;
            
            let vt = this.vt;
            let p = 0;

            try{
                    //https://back-parking.g2r.it/api/genera/prezzi?dataFine='+DataFine+'&dataInizio='+DataInizio+'&VeicoloId='+this.v+'&SedeId='+this.sede);
                    let r = await this.$axios.$get('/genera/prezzi?VeicoloId='+this.v+'&dataInizio='+this.dataInizio+'&dataFine='+this.dataFine+'&SedeId='+this.sede);
                   //?VeicoloId='+data.veicolo.value+'&dataInizio='+data.datainizio.toLocaleString('it-IT')+'&dataFine='+data.datafine.toLocaleString('it-IT')+'&SedeId='+data.sede);
                
                   r.map(function(item){
                       if(item.categoria.id == vt){
                          console.log(item.categoria.nome);
                          
                           p = item.prezzo;
                          
                       }
                    })

                
                   
                    this.prezzo = p.toFixed(2);
                    this.loading = true;
                }
                catch(err){
                    console.log(err);
                }
                

               

            
        },
    }
</script>