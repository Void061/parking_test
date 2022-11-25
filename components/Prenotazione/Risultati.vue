<template>
    <section id="results" class="pb-[100px] md:pb-[136px] px-[20px] md:px-[81px] container mx-auto">
           <div  v-for="veicolo in this.risultati" :key="veicolo.id" :id="veicolo.id" class="py-[28px] border-b-[1px] border-solid border-[#B4B4B4] flex md:gap-[100px] justify-between">
               
            <div class="flex flex-col md:items-center items-start md:flex-row gap-[20px] md:gap-[100px]">
            <h4 class="text-secondary font-medium text-[20px]">{{veicolo.categoria.nome}}</h4>
            
            <label class="flex items-center gap-[30px]">
               
                <!-- <input type="radio" name="risultato" /> -->
               
                <div class="veicolo-m" v-html="veicolo.categoria.svgIcon"></div>
               
            </label>
            </div>
            
            <button v-if="veicolo.prezzo >0 " @click="Riepilogo(veicolo.categoria.VeicoloId, veicolo.categoria.id, risultati.datainizio, risultati.datafine, risultati.orainizio, risultati.orafine)" class="px-[18px] py-[10px] w-[152px] h-[46px] flex items-center justify-between bg-primary rounded-[11px]"><h3 class="font-semibold text-secondary text-[24px]">€ {{veicolo.prezzo.toFixed(2)}}</h3><img src="/img/arrow-right.png" alt="arrow-right"/></button>
            <button v-else class="px-[18px] py-[10px] w-[152px] h-[46px] flex items-center justify-between bg-primary rounded-[11px]"><h3 class="font-semibold text-secondary text-[14px]">NON DISPONIBILE</h3></button>
        </div>

        
        
    </section>
</template>


<script>
export default {
    props: ['risultati'],
   
    methods:{
        Riepilogo(veicolo_copertura, veicolo_id, data_inizio, data_fine, ora_inizio, ora_fine){
           
           this.$router.push('/riepilogo?di='+data_inizio+'&df='+data_fine+'&oi='+ora_inizio+'&of='+ora_fine+'&v='+veicolo_copertura+'&vt='+veicolo_id);
            
        }
    },
  
}
</script>

<style>

.veicolo-m path{
    
   fill: #143793;
}

</style>