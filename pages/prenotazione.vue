

<template>
    <div>
        <PrenotazioneForm v-on:Search="SearchCopertura" :data_start="this.data_start" :ora_start="this.ora_start" :ora_end="this.ora_end" :data_end="this.data_end" :sede="this.sede" :veicolo="this.veicolo" :veicoli="this.veicoli" />
        <PrenotazioneRisultati :risultati="this.risultati" />
       
    </div>
</template>


<script>

    export default{
       
      data(){
    return{
      veicoli: {},
      risultati: {},
      data_start: '',
      ora_start: '',
      data_end: '',
      ora_end: '',
      veicolo: '',
      sede: '1',
    }
  },
  async created(){
      
   
  },
  methods: {

      async SearchCopertura(data){
        let VoidObj = {};
        //this.risultati = VoidObj;
     
         
          let r = await this.$axios.$get('https://back-parking.g2r.it/api/genera/prezzi?dataFine='+data.datafine+'&dataInizio='+data.datainizio+'&VeicoloId='+data.veicolo+'&SedeId='+data.sede);
          r.data['datainizio'] = data.data_start;
          r.data['datafine'] = data.data_end;
          r.data['orainizio'] = data.ora_start;
          r.data['orafine'] = data.ora_end
          this.risultati = r.data;
          console.log(this.risultati);
           setTimeout(() => {
             document.getElementById('results').scrollIntoView();
        }, "1100")
          
      }
  },
  async mounted(){
    const query = new URLSearchParams({
        order: JSON.stringify([ ['order', 'asc'] ])
      }) 
     try{
      const response = await this.$axios.get('https://back-parking.g2r.it/api/veicolo');
      this.veicoli = response.data.data;
     
    }
    catch(error){
      console.log(error);
    }

    if(this.$route.query.veicolo != undefined && this.$route.query.data_start != undefined && this.$route.query.ora_start != undefined && this.$route.query.data_end != undefined && this.$route.query.ora_end != undefined && this.$route.query.sede != undefined){
      this.veicolo = this.$route.query.veicolo;
      this.data_start = this.$route.query.data_start;
      this.ora_start = this.$route.query.ora_start;
      this.data_end = this.$route.query.data_end;
      this.ora_end = this.$route.query.ora_end;
      this.sede = this.$route.query.sede;
      let DataInizio = new Date(this.data_start + " " + this.ora_start).toLocaleString('it-IT');
      let DataFine = new Date(this.data_end + " " + this.ora_end).toLocaleString('it-IT');
      let todayDate = new Date().toLocaleString('it-IT');
      
      if(todayDate > DataInizio || todayDate > DataFine || DataInizio > DataFine){
        document.getElementById('error-data').innerHTML = 'Date incongruenti';
        document.getElementById('error-data').classList.remove('hidden');
      }
      else{
      try{
       
        let r = await this.$axios.$get('https://back-parking.g2r.it/api/genera/prezzi?dataFine='+DataFine+'&dataInizio='+DataInizio+'&VeicoloId='+this.veicolo+'&SedeId='+this.sede);
        r.data['datainizio'] = this.data_start;
        r.data['datafine'] = this.data_end;
        r.data['orainizio'] = this.ora_start;
        r.data['orafine'] = this.ora_end;
       
        this.risultati = r.data;
      
        
        setTimeout(() => {
             document.getElementById('results').scrollIntoView();
        }, "1100")
        
        
      }
      catch(err){
        console.log(err);
      }
      }
    }
  },

    
}
</script>