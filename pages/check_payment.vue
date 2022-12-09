<template>
    <div>
        
    </div>
</template>



<script>
export default{
    data(){
       return{
           t: 0,
       }
    },
    async mounted(){
        await this.init();
    },
    methods: {
        async init(){
          

            if(this.$route.query.CategoriaId != "" && this.$route.query.CategoriaId != undefined && this.$route.query.dataInizio != "" && this.$route.query.dataInizio != undefined
             && this.$route.query.dataFine != "" && this.$route.query.dataFine != undefined && this.$route.query.SedeId != "" && this.$route.query.SedeId != undefined 
             && this.$route.query.Nome != "" && this.$route.query.Nome != undefined && this.$route.query.Cognome != "" && this.$route.query.Cognome != undefined 
             && this.$route.query.Telefono != "" && this.$route.query.Telefono != undefined && this.$route.query.Mail != "" && this.$route.query.Mail != undefined
             && this.$route.query.Modello != "" && this.$route.query.Modello != undefined && this.$route.query.Targa != "" && this.$route.query.Targa != undefined
            
             && this.$route.query.Veicolo != "" && this.$route.query.Veicolo != undefined && this.$route.query.Fattura != "" && this.$route.query.Fattura != undefined 
             && this.$route.query.Nazione != "" && this.$route.query.Nazione != undefined && this.$route.query.mod_invio != "" && this.$route.query.mod_invio != undefined
             && this.$route.query.dato_invio != "" && this.$route.query.dato_invio != undefined && this.$route.query.RagioneSociale != "" && this.$route.query.RagioneSociale != undefined
             && this.$route.query.Provincia != "" && this.$route.query.Provincia != undefined && this.$route.query.Comune != "" && this.$route.query.Comune != undefined
             && this.$route.query.Indirizzo != "" && this.$route.query.Indirizzo != undefined && this.$route.query.City != "" && this.$route.query.City != undefined
             && this.$route.query.Cap != "" && this.$route.query.Cap != undefined && this.$route.query.Piva != "" && this.$route.query.Piva != undefined 
             && this.$route.query.NomeSocieta != "" && this.$route.query.NomeSocieta != undefined && this.$route.query.ora_uscita != "" && this.$route.query.ora_uscita != undefined
             && this.$route.query.ora_ingresso != "" && this.$route.query.ora_ingresso != undefined && this.$route.query.ingresso != "" && this.$route.query.ingresso != undefined
             && this.$route.query.uscita != "" && this.$route.query.uscita != undefined && this.$route.query.marca != "" && this.$route.query.marca != undefined 
             && this.$route.query.ricevuta != "" && this.$route.query.ricevuta != undefined && this.$route.query.fatturaEmessa != "" && this.$route.query.fatturaEmessa != undefined
             && this.$route.query.ricevutaEmessa != "" && this.$route.query.ricevutaEmessa != undefined && this.$route.query.payment_method != "" && this.$route.query.payment_method != undefined
             && this.$route.query.session_id != "" && this.$route.query.session_id != undefined
             ){

                const Save = await this.$axios.$post('/prenotazione/acquisizione', {
                    "sessionId" : this.$route.query.session_id,
                    "CategoriaId": this.$route.query.CategoriaId,
                    "dataInizio": this.$route.query.dataInizio,
                    "dataFine" : this.$route.query.dataFine,
                    "SedeId": 1,
                    "Nome":this.$route.query.Nome,
                    "Cognome":this.$route.query.Cognome,
                    "Telefono": this.$route.query.Telefono,
                    "Mail": this.$route.query.Mail,
                    "Modello": this.$route.query.Modello,
                    "Targa": this.$route.query.Targa,
                    "Messaggio": this.$route.query.Messaggio,
                    "Prezzo": 'nascosto',
                    "Veicolo": this.$route.query.Veicolo,
                    "Fattura" : this.$route.query.Fattura,
                    "Nazione" : this.$route.query.Nazione,
                    "mod_invio" : this.$route.query.mod_invio,
                    "dato_invio": this.$route.query.dato_invio,
                    "RagioneSociale" : this.$route.query.RagioneSociale,
                    "Provincia" :this.$route.query.Provincia,
                    "Comune" : this.$route.query.Comune,
                    "Indirizzo" : this.$route.query.Indirizzo,
                    "City" : this.$route.query.City,
                    "Cap" : this.$route.query.Cap,
                    "Piva" : this.$route.query.Piva,
                    "NomeSocieta" : this.$route.query.NomeSocieta,
                    "ora_uscita": this.$route.query.ora_uscita,
                    "ora_ingresso": this.$route.query.ora_ingresso,
                    "ingresso": this.$route.query.ingresso,
                    "uscita": this.$route.query.uscita,
                    "marca": this.$route.query.marca,
                    "ricevuta" : this.$route.query.ricevuta,
                    "fatturaEmessa": this.$route.query.ricevutaEmessa,//E' per dire che non serve la fattura se ricevuta è 1
                    "ricevutaEmessa": this.$route.query.fatturaEmessa, //E' per dire che non serve la ricevuta se fattura è 1
                    "payment_method" : "stripe",

                }).then(function(response){
                    
                   $nuxt.$router.push('/thankyou')
                }).catch(function(e){console.log(e)})
                 
            }
        },
    },
}
</script>