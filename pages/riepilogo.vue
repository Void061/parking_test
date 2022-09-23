<template>
    <RiepilogoModulo :icon="this.icon" :nome="this.nome" :prezzo="this.prezzo" :data_i="this.data_i" :data_f="this.data_f" :ora_i="this.ora_i" :v="this.v" :slot-scope="this.data_f" :ora_f="this.ora_f"/>
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
              
              
            }
            
            
        },
        async mounted(){

            if(this.$route.query.di != undefined && this.$route.query.di != "" && this.$route.query.df != undefined && this.$route.query.df != "" && this.$route.query.oi != undefined && this.$route.query.oi != "" && this.$route.query.of != undefined && this.$route.query.of != "" && this.$route.v != "" && this.$route.query.v != undefined){
                this.data_i = this.$route.query.di;
                this.ora_i = this.$route.query.oi;
                this.data_f = this.$route.query.df;
                this.ora_f = this.$route.query.of;
                
                this.v = this.$route.query.v;
                let vt = this.$route.query.v;
                

                let DataInizio = new Date(this.data_i + " " + this.ora_i).toLocaleString('it-IT');
                let DataFine = new Date(this.data_f + " " + this.ora_f).toLocaleString('it-IT');
                let n = "";
                let i = "";
                let p = "";
                try{
                    let r = await this.$axios.$get('https://back-parking.g2r.it/api/genera/prezzi?dataFine='+DataFine+'&dataInizio='+DataInizio+'&VeicoloId='+this.v+'&SedeId='+this.sede);
                   
                   r.data.map(function(item){
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
                this.$router.push('/prenotazione');
            }
            
        }
    }
</script>