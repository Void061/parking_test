<template>
  <div>
    <HomeHero :veicoli="this.veicoli"/>
      <HomeFunctionality />
        <HomeChisiamo />
        <HomeReviews />
        <HomeParkings />


    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      veicoli: {},
    }
  },

 
   
  async created(){
    const query = new URLSearchParams({
        order: JSON.stringify([ ['order', 'asc'] ])
      }) 
    try{
      const response = await this.$axios.get('https://back-parking.g2r.it/api/veicolo?');
      this.veicoli = response.data.data;
      
    }
    catch(error){
      console.log(error);
    }
  },

    
}
</script>
