

<template>
<div>
  <BaseLoadingPanel :ready="this.ready" />
    <div v-if="ready">
        <PrenotazioneForm v-on:Search="SearchCopertura"  :data_start="this.data_start" :ora_start="this.ora_start" :ora_end="this.ora_end" :data_end="this.data_end" :sede="this.sede" :veicolo="this.veicolo" :veicoli="this.veicoli" />
        <PrenotazioneRisultati :risultati="this.risultati" />
       
    </div>
  </div>
</template>


<script>

    export default{
       
      data(){
    return{
      ready: false,
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
     
         
          let r = await this.$axios.$get('/genera/prezzi?VeicoloId='+data.veicolo.value+'&dataInizio='+data.datainizio+'&dataFine='+data.datafine+'&SedeId='+data.sede);
         // https://back-parking.g2r.it/api/genera/prezzi?VeicoloId='+data.veicolo+'&dataInizio='+data.datainizio.toLocaleString('it-IT')+'&dataFine='+data.datafine.toLocaleString('it-IT')+'&SedeId='+data.sede);
          r['datainizio'] = data.data_start;
          r['datafine'] = data.data_end;
          r['orainizio'] = data.ora_start;
          r['orafine'] = data.ora_end
          this.risultati = r;
      
          
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
      const response = await this.$axios.get('https://back-parking.g2r.it/api/veicolo?'+query);
      this.veicoli = response.data.data;
      this.ready = true;
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
      let DataInizio = new Date(this.data_start + " " + this.ora_start);
      let DataFine = new Date(this.data_end + " " + this.ora_end);
      let todayDate = new Date();
      
      if(todayDate > DataInizio || todayDate > DataFine || DataInizio > DataFine){
        document.getElementById('error-data').innerHTML = 'Date incongruenti';
        document.getElementById('error-data').classList.remove('hidden');
      }
      else{
        let daysBtwdate= Math.abs(DataFine.getTime() - DataInizio.getTime());
        daysBtwdate = daysBtwdate / (24 * 60 * 60 * 1000);

        if(daysBtwdate >= 30){alert('La fuoriuscita dal listino di 30 giorni non è ancora prevista, inserire un ingresso & uscita con un periodo minore di un mese.')}
        else{
      try{
       
     
        let r = await this.$axios.$get('/genera/prezzi?VeicoloId='+this.veicolo+'&dataInizio='+DataInizio+'&dataFine='+DataFine+'&SedeId='+this.sede);
        
        
        r['datainizio'] = this.data_start;
        r['datafine'] = this.data_end;
        r['orainizio'] = this.ora_start;
        r['orafine'] = this.ora_end;
        
       
        this.risultati = r
       
       
        
        setTimeout(() => {
            
             document.getElementById('results').scrollIntoView();
             
        }, "1100")
        
        
      }
      catch(err){
        console.log(err);
      }
        }
      }
    }
  },

    
}
</script>