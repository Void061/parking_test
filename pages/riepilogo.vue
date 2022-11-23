<template>


    <RiepilogoModulo :icon="this.icon" :nome="this.nome" :prezzo="this.prezzo" :data_i="this.data_i" :data_f="this.data_f" :ora_i="this.ora_i" :v="this.v" :vt="this.vt_of" :slot-scope="this.data_f" :ora_f="this.ora_f"/>

</template>


<script>
    export default{
        data(){
            return{

                
                    data_i : '',
                    data_f : '',
                    ora_i : '',
                    ora_f : '',
                    v: '',
                    sede: '1',
                    icon: '',
                    nome: '',
                    prezzo: '',
                    vt_of: '',
                    
                    
              
            }
            
            
        },
        
        async mounted(){

            if(this.$route.query.vt != undefined && this.$route.query.vt != "" && this.$route.query.di != undefined && this.$route.query.di != "" && this.$route.query.df != undefined && this.$route.query.df != "" && this.$route.query.oi != undefined && this.$route.query.oi != "" && this.$route.query.of != undefined && this.$route.query.of != "" && this.$route.v != "" && this.$route.query.v != undefined){
                this.data_i = this.$route.query.di;
                this.ora_i = this.$route.query.oi;
                this.data_f = this.$route.query.df;
                this.ora_f = this.$route.query.of;
                
                this.v = this.$route.query.v;
                this.vt_of = this.$route.query.vt;
                let vt = this.$route.query.vt;
                

                let DataInizio = new Date(this.data_i + " " + this.ora_i);
                let DataFine = new Date(this.data_f + " " + this.ora_f);
                let n = "";
                let i = "";
                let p = "";
                try{
                    //https://back-parking.g2r.it/api/genera/prezzi?dataFine='+DataFine+'&dataInizio='+DataInizio+'&VeicoloId='+this.v+'&SedeId='+this.sede);
                    let r = await this.$axios.$get('/genera/prezzi?VeicoloId='+this.v+'&dataInizio='+DataInizio+'&dataFine='+DataFine+'&SedeId='+this.sede);
                   //?VeicoloId='+data.veicolo.value+'&dataInizio='+data.datainizio.toLocaleString('it-IT')+'&dataFine='+data.datafine.toLocaleString('it-IT')+'&SedeId='+data.sede);
                
                   r.map(function(item){
                       if(item.categoria.id == vt){
                          console.log(item.categoria.nome);
                           n = item.categoria.nome;
                           p = item.prezzo;
                           i = item.categoria.svgIcon;
                       }
                    })

                    this.nome = n;
                    this.icon = i;
                   
                    this.prezzo = p.toFixed(2);
                }
                catch(err){
                    console.log(err);
                }

            }
            else{
                //this.$router.push('/prenotazione');
            }
            
        }
    }
</script>