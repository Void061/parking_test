<template>
    <div>
        <PrenotazioneForm v-on:Search="SearchCat" :veicoli="this.veicoli" />
        <PrenotazioneRisultati :risultati="this.risultati" />
    </div>
</template>


<script>
    export default{
       
      data(){
    return{
      veicoli: {},
      risultati: {},
    }
  },
  async created(){
      
    try{
      const response = await this.$axios.get('https://back-parking.g2r.it/api/veicolo');
      this.veicoli = response.data.data;
     
    }
    catch(error){
      console.log(error);
    }
  },
  methods: {
      async SearchCat(id){
          const r = await this.$axios.get('https://back-parking.g2r.it/api/veicolo');
          let cat = [];
          r.data.data.map(function(item){
              if(item.id === id){
                  cat = item.Categorie;
              }
          })
         
          this.risultati = cat;
        
          
      }
  }
    
}
</script>