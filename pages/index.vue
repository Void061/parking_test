<template>
  <div>
    <HomeHero  :veicoli="this.veicoli"/>
      <HomeFunctionality />
        <HomeChisiamo />
        <HomeReviews />
        <HomeParkings />
        <HomeServizi />
        <HomeMappa />

    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      veicoli: {},
      //Apertura / chiusura
      FasciaOraria: {},
    }
  },

 
   
  async created(){
    const query = new URLSearchParams({
        order: JSON.stringify([ ['order', 'asc'] ])
      }) 
    try{
      const response = await this.$axios.get('/veicolo?'+query);
      this.veicoli = response.data.data;
     
      
    }
    catch(error){
      console.log(error);
    }
  },

    
}
</script>
