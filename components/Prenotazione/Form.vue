<template>
      <section class="px-[20px] md:px-[81px]  py-[100px] md:py-[136px] mx-auto  container">
        <div class=" mt-[25px] flex bg-[#ffff] items-center gap-[28px]">
            <svg width="26" height="36" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="22" transform="translate(1 1)" fill="white"/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <h4 class="font-medium text-[36px] text-secondary">Garage Ottaviano</h4>
        </div>
        <h2 class="font-bold text-[20px] text-secondary">Prenota ora</h2>
       

        <div class="flex flex-col md:flex-row mt-[35px] gap-[44px] ">
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                    <client-only><date-picker :id="'data_start'" :input-class="'mypicker'" placeholder="Data ingresso" format="MM/dd/yyyy" :value="this.data_start" /></client-only>
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                   
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-ingresso" />
                    <div class="timepicker"  data-mdb-with-icon="false" id="input-toggle-timepicker">
                     

                     <template v-if="this.ora_start != undefined && this.ora_start != null && this.ora_start != ''">
                      <select id="ora_start" class="pl-[50px] absolute top-0 bottom-0 left-0 border-0 w-full" :value="this.ora_start">
                        <option v-for="item in orari" :key="item">{{item}}</option>
                      </select>
                     </template>

                     <template v-if="this.ora_start == undefined || this.ora_start == null || this.ora_start == ''">
                        <select id="ora_start" class="pl-[50px] absolute top-0 bottom-0 left-0 border-0 w-full">
                        <option selected disabled>Orario ingresso</option>
                        <option v-for="item in orari" :key="item">{{item}}</option>
                        </select>
                     </template>
                    </div>
                </div>
            </div>
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                    <client-only><date-picker :id="'data_end'" :input-class="'mypicker'" placeholder="Data uscita" format="MM/dd/yyyy" :value="this.data_end" /></client-only>
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-uscita" />  
                     <template v-if="this.ora_end != undefined && this.ora_end != null && this.ora_end != ''">
                      <select id="ora_end" class="pl-[50px] absolute top-0 bottom-0 left-0 border-0 w-full" :value="this.ora_end">
                        <option v-for="item in orari" :key="item">{{item}}</option>
                      </select>
                     </template>

                     <template v-if="this.ora_end == undefined || this.ora_end == null || this.ora_end == ''">
                        <select id="ora_end" class="pl-[50px] absolute top-0 bottom-0 left-0 border-0 w-full">
                        <option selected disabled>Orario ingresso</option>
                        <option v-for="item in orari" :key="item">{{item}}</option>
                        </select>
                     </template>
                    
                </div>
            </div>
        </div>
        <h3 id="error-data" class="hidden my-[20px] text-center text-red-800 font-medium pt-[7px]" >Compila correttamente Ingresso e uscita</h3>
        <div class="flex flex-row md:flex-nowrap flex-wrap md:px-[11px] mt-[35px] gap-[30px] md:gap-0 justify-between">
            
          
            <label class="cursor-pointer flex gap-[30px] items-center"  v-for="v in this.veicoli" :key="v.id" :id="v.id" @click="() => ActiveVeicolo(v.id)">
                
                <input  type="radio" v-if="v.id == veicolo" name="copertura" checked :value="v.id" />
                <input type="radio" v-if="v.id != veicolo" name="copertura" :value="v.id" />
                <div class="veicoli" v-html="v.svgIcon"></div>
            </label>
           
        </div>
             <h3 id="error-veicolo" class=" hidden my-[20px] text-center text-red-800 font-medium pt-[7px]" >Seleziona un veicolo</h3>
            
        <button @click="SearchCopertura()" class="mt-[50px] py-[14px] w-full bg-secondary rounded-[11px]"><h3 class="text-[#ffff] text-[24px] font-semibold">CALCOLA</h3></button>
        
        <a href="#results" class="mt-[60px] flex justify-center"><img class="cursor-pointer" src="/img/arrow_bottom.png" alt="arrow_bottom" /></a>
       
    </section>
</template>



<script>

export default{
  props: ['veicoli', 'veicolo', 'data_start', 'ora_start', 'data_end', 'ora_end' , 'sede'],
 components: { },
  data(){
      return{
        m_data_start : '',
        m_data_end: '',
        m_veicolo: '',
        m_ora_start: '',
        m_ora_end: '',
        m_sede: '1',
        orari: ['00:00', '00:30', '01:00', '01:30', '02:00','02:30', '03:00','03:30', '04:00','04:30', '05:00','05:30', '06:00','06:30', '07:00','07:30', '08:00','08:30', '09:00','09:30', '10:00', '10:30', '11:00','11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
       
      }
  },
  
 
  methods: {
  SearchCopertura(){
        this.m_data_end = document.getElementById('data_end');
        this.m_data_start = document.getElementById('data_start');
        this.m_ora_start = document.getElementById('ora_start');
        this.m_ora_end = document.getElementById('ora_end');
        this.m_veicolo = document.querySelector('input[name="copertura"]:checked');
      
       
        if(this.m_data_start.value == "" || this.m_data_end.value == undefined){
          document.getElementById('error-data').innerHTML= 'Compila correttamente ingresso e uscita';
         document.getElementById('error-data').classList.remove('hidden');
        }
        else if(this.m_data_end.value == "" || this.m_data_end.value == undefined ){
          document.getElementById('error-data').innerHTML= 'Compila correttamente ingresso e uscita';
          document.getElementById('error-data').classList.remove('hidden');
        }
        else if(this.m_ora_start.value == "" || this.m_ora_start.value == undefined){
          document.getElementById('error-data').innerHTML= 'Compila correttamente ingresso e uscita';
          document.getElementById('error-data').classList.remove('hidden');
        }
        else if(this.m_ora_end.value == "" || this.m_ora_end.value == undefined){
         document.getElementById('error-data').innerHTML= 'Compila correttamente ingresso e uscita';
          document.getElementById('error-data').classList.remove('hidden');
        }
        else if(this.m_veicolo == '' || this.m_veicolo == undefined || this.m_veicolo == null){
          document.getElementById('error-veicolo').classList.remove('hidden');
      
        }
        else{
          //OK
          let Di = new Date(this.m_data_start.value + " " + this.m_ora_start.value).toLocaleString('it-IT');
          let Df = new Date(this.m_data_end.value + " " + this.m_ora_end.value).toLocaleString('it-IT');
          let todayDate = new Date().toLocaleString('it-IT');
          let data = {
              datainizio: Di,
              datafine: Df,
              data_start: this.m_data_start.value,
              data_end: this.m_data_end.value,
              ora_start: this.m_ora_start.value,
              ora_end: this.m_ora_end.value,
              veicolo: this.m_veicolo,
              sede: this.m_sede,
          };

          if(Di >= Df || todayDate > Di || todayDate > Df){
            document.getElementById('error-data').innerHTML = 'Date incongruenti';
            document.getElementById('error-data').classList.remove('hidden');
          }
          else{
          document.getElementById('error-data').classList.add('hidden');
          document.getElementById('error-veicolo').classList.add('hidden');
          this.$router.push('/prenotazione?data_start='+this.m_data_start.value+'&ora_start='+this.m_ora_start.value+'&data_end='+this.m_data_end.value+'&ora_end='+this.m_ora_end.value+"&veicolo="+this.m_veicolo.value+'&sede='+this.m_sede);
          this.$emit('Search', data);
          }
         // window.location.href='/prenotazione?data_start='+this.m_data_start.value+'&ora_start='+this.m_ora_start.value+'&data_end='+this.m_data_end.value+'&ora_end='+this.m_ora_end.value+"&veicolo="+this.m_veicolo.value+'&sede='+this.m_sede;
        }
        
    },
    ActiveVeicolo(id){
      let veicolo = document.getElementById(id);
      let veicoli = document.querySelectorAll(".veicoli-attivi");
      for (var i = 0; i < veicoli.length; i++) {
          
          veicoli[i].classList.remove('veicoli-attivi');

      }
      veicolo.classList.add('veicoli-attivi');
      
       //this.$emit('Search', id);
    },
    
    
    
   
  },

  mounted(){
    
  },
  
 
}
</script>

<style>
.veicoli path {
  fill: #B4B4B4;
}

.veicoli-attivi path{
  fill: #2F168B !important;
}

.vdp-datepicker{
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
}
.mypicker{
  border: 0 !important;
  padding-left: 50px !important;
  width: 100% !important;
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

select option:disabled {
    color: #CCC;
}
</style>