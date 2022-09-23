<template>
      <section class="px-[20px] md:px-[81px]  py-[100px] md:py-[136px] mx-auto  container">
        <h2 class="font-bold text-[36px] text-secondary">Trova il tuo parcheggio</h2>
        <div class="px-[11px] mt-[25px] flex bg-[#ffff] items-center gap-[28px]">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="22" transform="translate(1 1)" fill="white"/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <h4 class="font-medium text-[20px] text-secondary">Garage olimpico ottaviano</h4>
        </div>

        <div class="flex flex-col md:flex-row mt-[35px] gap-[44px] ">
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                    <input id='data_start' datepicker-autohide datepicker :value="this.data_start" placeholder="Data ingresso" class="pl-[50px] absolute top-0 border-0 bottom-0 left-0 w-full" type="text" />
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                   
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-ingresso" />
                    <div class="timepicker"  data-mdb-with-icon="false" id="input-toggle-timepicker">
                      <input id="ora_start" data-mdb-toggle="input-toggle-timepicker" :value="this.ora_start" placeholder="Orario ingresso" class="pl-[50px] absolute top-0 bottom-0 left-0 border-0 w-full" type="text" />
                    </div>
                </div>
            </div>
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                    <input id="data_end" :value="this.data_end" datepicker-autohide datepicker placeholder="Data uscita" class="pl-[50px] absolute border-0 top-0 bottom-0 left-0 w-full" type="text" />
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-uscita" />
                    <div class="timepicker" data-mdb-with-icon="false" id="input-toggle-timepicker">
                      <input id="ora_end" data-mdb-toggle="input-toggle-timepicker" :value="this.ora_end" placeholder="Orario uscita" class="border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row md:flex-nowrap flex-wrap md:px-[11px] mt-[35px] gap-[30px] md:gap-0 justify-between">
            
          
            <label class="cursor-pointer flex gap-[30px] items-center"  v-for="v in this.veicoli" :key="v.id" :id="v.id" @click="() => ActiveVeicolo(v.id)">
                
                <input type="radio" v-if="v.id == veicolo" name="copertura" checked :value="v.id" />
                <input type="radio" v-if="v.id != veicolo" name="copertura" :value="v.id" />
                <div class="veicoli" v-html="v.svgIcon"></div>
            </label>
           
        </div>

        <button @click="() => SearchCopertura(this.data_start, this.data_end, this.ora_start, this.ora_end, this.veicolo, this.sede)" class="mt-[50px] py-[14px] w-full bg-secondary rounded-[11px]"><h3 class="text-[#ffff] text-[24px] font-semibold">CALCOLA</h3></button>
        
        <a href="#results" class="mt-[60px] flex justify-center"><img class="cursor-pointer" src="/img/arrow_bottom.png" alt="arrow_bottom" /></a>
       
    </section>
</template>



<script>
export default{
  props: ['veicoli', 'veicolo', 'data_start', 'ora_start', 'data_end', 'ora_end' , 'sede'],
  data(){
      return{
        m_data_start : '',
        m_data_end: '',
        m_veicolo: '',
        m_ora_start: '',
        m_ora_end: '',
        m_sede: '1',
      }
  },
  methods: {
    ActiveVeicolo(id){
      let veicolo = document.getElementById(id);
      let veicoli = document.querySelectorAll(".veicoli-attivi");
      for (var i = 0; i < veicoli.length; i++) {
          
          veicoli[i].classList.remove('veicoli-attivi');

      }
      veicolo.classList.add('veicoli-attivi');
      
       //this.$emit('Search', id);
    },
    SearchCopertura(){
        if(this.data_start == "" || this.data_end == "" || this.ora_start == "" || this.ora_end == "" || this.veicolo == "" ){


 
         
          this.m_data_start = document.getElementById('data_start');
          this.m_data_end = document.getElementById('data_end');
          this.m_ora_start = document.getElementById('ora_start');
          this.m_ora_end = document.getElementById('ora_end');
          this.m_veicolo = document.querySelector('input[name="copertura"]:checked');
          

        if(this.m_data_start == undefined ||this.m_data_start == "" || this.m_data_end == undefined || this.m_data_end == "" || this.m_ora_start == "" || this.m_ora_start == undefined || this.m_ora_end == undefined || this.m_ora_end == "" || this.m_veicolo == undefined || this.m_veicolo == ""){
            console.log(0);
        }
          else{
          let data = {
            datainizio: new Date(this.m_data_start + " " + this.m_ora_start),
            datafine: new Date(this.m_data_fine + " " + this.m_ora_fine),
            veicolo: this.m_veicolo,
            sede: this.m_sede,
           
          }

          this.$emit('Search', data);
          }
          
        }
        else{
          console.log(0);
        }

       
        
    },
    
   
  },
  mounted(){

  },
  
 
}
</script>

<style scoped>
.veicoli path {
  fill: #B4B4B4;
}

.veicoli-attivi path{
  fill: #2F168B !important;
}

.datepicker-view{
  flex-direction: column !important;
}
.datepicker-header {
  height: auto !important;
  background: transparent !important;
}
.datepicker-footer{
  z-index: -1;
}
</style>