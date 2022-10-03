<template>
    <section class="min-h-[700px] bg-primary h-screen">

        <div class="px-[20px] md:px-[80px] h-full container flex justify-center md:justify-start items-center relative md:mx-auto">
          <img class="z-[1] absolute md:block hidden bottom-0 right-[5%]" src="/img/hand.png" alt="prenotazioni" />
          <div class="z-[2] flex flex-col max-w-[500px] md:max-w-[unset] md:min-w-[546px]">
           <div class="mt-[18px] flex gap-[20px] items-center  py-[13px]">
              <svg width="26" height="36" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="36" transform="translate(1 1)" fill=""/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 class="text-secondary font-medium text-[36px]">Parcheggio Ottaviano</h4>
            </div>
            <h2 class="text-secondary font-bold text-[20px]">Prenota ora</h2>
            
            <div class="mt-[8px] flex md:flex-row flex-col gap-[8px]">
              <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-ingresso" />
                    <client-only><date-picker :id="'data_start'" :input-class="'mypicker'" placeholder="Data ingresso" format="MM/dd/yyyy" /></client-only>
                    
                </div>
               
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-ingresso" />
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_start">
                      <option selected value="">Orario ingresso</option>
                      <option>00:00</option>
                      <option>00:30</option>
                      <option>01:00</option>
                      <option>01:30</option>
                      <option>02:00</option>
                      <option>02:30</option>
                      <option>03:00</option>
                      <option>03:30</option>
                      <option>04:00</option>
                      <option>04:30</option>
                      <option>05:00</option>
                      <option>05:30</option>
                      <option>06:00</option>
                      <option>06:30</option>
                      <option>07:00</option>
                      <option>07:30</option>
                      <option>08:00</option>
                      <option>08:30</option>
                      <option>09:00</option>
                      <option>09:30</option>
                      <option>10:00</option>
                      <option>10:30</option>
                      <option>11:00</option>
                      <option>11:30</option>
                      <option>12:00</option>
                      <option>12:30</option>
                      <option>13:00</option>
                      <option>13:30</option>
                      <option>14:00</option>
                      <option>14:30</option>
                      <option>15:00</option>
                      <option>15:30</option>
                      <option>16:00</option>
                      <option>16:30</option>
                      <option>17:00</option>
                      <option>17:30</option>
                      <option>18:00</option>
                      <option>18:30</option>
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                      <option>21:30</option>
                      <option>22:00</option>
                      <option>22:30</option>
                      <option>23:00</option>
                      <option>23:30</option>
                    </select>
                </div>
              </div>
               <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                   <client-only><date-picker :id="'data_end'" :input-class="'mypicker'" placeholder="Data uscita" format="MM/dd/yyyy"/></client-only>
                </div>
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-uscita" />
                   
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_end">
                      <option selected value="">Orario uscita</option>
                      <option>00:00</option>
                      <option>00:30</option>
                      <option>01:00</option>
                      <option>01:30</option>
                      <option>02:00</option>
                      <option>02:30</option>
                      <option>03:00</option>
                      <option>03:30</option>
                      <option>04:00</option>
                      <option>04:30</option>
                      <option>05:00</option>
                      <option>05:30</option>
                      <option>06:00</option>
                      <option>06:30</option>
                      <option>07:00</option>
                      <option>07:30</option>
                      <option>08:00</option>
                      <option>08:30</option>
                      <option>09:00</option>
                      <option>09:30</option>
                      <option>10:00</option>
                      <option>10:30</option>
                      <option>11:00</option>
                      <option>11:30</option>
                      <option>12:00</option>
                      <option>12:30</option>
                      <option>13:00</option>
                      <option>13:30</option>
                      <option>14:00</option>
                      <option>14:30</option>
                      <option>15:00</option>
                      <option>15:30</option>
                      <option>16:00</option>
                      <option>16:30</option>
                      <option>17:00</option>
                      <option>17:30</option>
                      <option>18:00</option>
                      <option>18:30</option>
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                      <option>21:30</option>
                      <option>22:00</option>
                      <option>22:30</option>
                      <option>23:00</option>
                      <option>23:30</option>
                    </select>
                    
                </div>
                 
              </div>
            </div>
             <h3 id="error-generic" class="hidden text-center text-red-800 font-medium pt-[7px]" >Compila correttamente Ingresso e uscita</h3>
             <h3 id="error-generic-ore" class="hidden text-center text-red-800 font-medium pt-[7px]" >Data/ora ingresso incongruente a Data/ora uscita</h3>
            <div class="px-[20px] mt-[8px] py-[18px] flex gap-[26px] bg-[#ffff]">

              <label class="items-center cursor-pointer flex flex-1 gap-[20px]" @click="() => ActiveVeicolo(veicolo.id)" v-for="veicolo in this.veicoli" :key="veicolo.id" :id="veicolo.id">
                <input class="w-[10px] h-[10px] md:w-[16px] md:h-[16px] " :value="veicolo.id" type="radio" name="veicolo" />
                <div class="veicoli" v-html="veicolo.svgIcon"></div>
              </label>
              
              
            </div>
             <h3 id="error-veicolo" class="hidden text-center text-red-800 font-medium pt-[7px]" >Seleziona un veicolo</h3>

            <button @click="() => SearchPren()" class="mt-[14px] rounded-[11px] py-[14px] text-[#ffff] bg-secondary"><h3 class="font-semibold text-[24px]">CERCA</h3></button>
          </div>
        </div>
        
    </section>
</template>


<script>

export default{
  props: ['veicoli'],
  data(){
    return{
      data_start: "",
      data_end: "",
      ora_start: "",
      ora_end: "''",
      sede: "",
      veicolo: "",
    }
  },
  methods: {
   
    SearchPren(){
      this.data_start = document.getElementById('data_start');
      this.data_end = document.getElementById('data_end');
      this.ora_start = document.getElementById('ora_start');
      this.ora_end = document.getElementById('ora_end');
      this.sede = 1;
      this.veicolo = document.querySelector('input[name="veicolo"]:checked');
      
      if(this.data_start.value == undefined || this.data_start.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
      else if(this.data_end.value == undefined || this.data_end.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
       else if(this.ora_end.value == undefined || this.ora_end.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
       else if(this.ora_start.value == undefined || this.ora_start.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
      else if(this.veicolo?.value){
        //OK
         let dataInizio = new Date(this.data_start.value + " " + this.ora_start.value).toLocaleString('it-IT');
         let dataFine = new Date(this.data_end.value + " " + this.ora_end.value).toLocaleString('it-IT');
         let todayDate = new Date().toLocaleString('it-IT');

        if(todayDate > dataInizio){console.log('La data di oggi è maggiore della data inizio')}
        if(todayDate > dataFine){console.log('La data di oggi è maggiore della data di fine')}
       
        if(dataInizio >= dataFine || todayDate > dataInizio || todayDate > dataFine){
          document.getElementById('error-generic-ore').classList.remove('hidden');
          document.getElementById('error-veicolo').classList.add('hidden');
          document.getElementById('error-generic').classList.add('hidden');
        }
        else{
        this.$router.push('/prenotazione?data_start='+this.data_start.value+'&ora_start='+this.ora_start.value+'&data_end='+this.data_end.value+'&ora_end='+this.ora_end.value+'&veicolo='+this.veicolo.value+'&sede='+this.sede);
        }
      }
      else{
        document.getElementById('error-generic').classList.add('hidden');
        document.getElementById('error-veicolo').classList.remove('hidden');
       
      }
      
    },
    ActiveVeicolo(id){
      let veicolo = document.getElementById(id);
      let veicoli = document.querySelectorAll(".veicoli-attivi");
      for (var i = 0; i < veicoli.length; i++) {
          
          veicoli[i].classList.remove('veicoli-attivi');

      }
      veicolo.classList.add('veicoli-attivi');
      
    },


  },
  mounted(){
   
  },

}
</script>

<style>
 .datepicker-view{
  flex-direction: column !important;
}
.datepicker-header {
  height: auto !important;
  background: transparent !important;
}

.veicoli path {
  fill: #B4B4B4;
}

.veicoli-attivi path{
  fill: #2F168B !important;
}
.datepicker-footer{
  z-index: -1;
}


@media only screen and (max-width: 600px) {
  .veicoli svg{
  width: 35px !important;
}
}

</style>