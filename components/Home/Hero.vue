<template>
    <section class="min-h-[700px] bg-primary h-screen">
        <div v-if="!this.ready" class="fixed top-0 bottom-0 w-full bg-primary h-screen z-[9]">
          <div class="flex justify-center items-center h-screen">
            <img class="min-w-[120px]" src="/img/tail-spin.svg" alt="spin" />
          </div>
        </div>
        <div v-else class="pb-5 px-[20px] md:px-[80px] h-full container flex justify-center xl:justify-start items-center relative mx-auto">
          <img class="z-[1] absolute xl:block hidden bottom-0 right-[5%]" src="/img/hand.png" alt="prenotazioni" />
          <div class="z-[2] flex flex-col max-w-[500px] md:max-w-[unset] md:min-w-[546px]">
            <h4 class="mt-[18px] text-secondary font-bold text-[25px] md:text-[40px]">PARKINGARAGE I</h4>
           <div class="flex gap-[10px] md:gap-[20px] items-center">
              <svg class="hidden md:block" width="26" height="36" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="36" transform="translate(1 1)" fill=""/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg class=" md:hidden" width="14" height="26" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="36" transform="translate(1 1)" fill=""/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 class="text-secondary font-medium text-[16px] md:text-[24px] xl:text-[36px]">{{this.sede_info.nome}}</h4>
            </div>
            <h2 class="text-secondary font-medium text-[12px] md:text-[20px] pb-[13px]">{{this.sede_info.ind}}</h2>
            <h2 class="text-secondary font-medium text-[12px] md:text-[20px] pb-[13px]">{{this.sede_info.cap}} - {{this.sede_info.cit}}</h2>
            

            <h2 class="text-secondary font-bold text-[20px]">Prenota ora</h2>
            
            <div class="mt-[8px] flex md:flex-row flex-col gap-[8px]">
              <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-ingresso" />
                    <client-only><date-picker :language="it" :highlighted="this.state.highlighted" :disabled-dates="this.state.disabledDates" :id="'data_start'" :input-class="'mypicker'" placeholder="Data ingresso" format="dd/MM/yyyy" /></client-only>
                    
                </div>
               
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-ingresso" />
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_start">
                      <option selected value="">Orario ingresso</option>
                      <option v-for="item in this.orari_ingresso" :key="item">{{item}}</option>
                    </select>
                </div>
              </div>
               <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                   <client-only><date-picker :language="it" :highlighted="this.state.highlighted" :disabled-dates="this.state.disabledDates" :id="'data_end'" :input-class="'mypicker'" placeholder="Data uscita" format="dd/MM/yyyy"/></client-only>
                </div>
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-uscita" />
                   
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_end">
                      <option selected value="">Orario uscita</option>
                       <option v-for="item in this.orari_uscita" :key="item">{{item}}</option>
                    </select>
                    
                </div>
                 
              </div>
            </div>
             <h3 id="error-generic" class="hidden text-center text-red-800 font-medium pt-[7px]" >Compila correttamente Ingresso e uscita</h3>
             <h3 id="error-generic-ore" class="hidden text-center text-red-800 font-medium pt-[7px]" >Data/ora ingresso incongruente a Data/ora uscita</h3>
            <div class="px-[20px] mt-[8px] py-[18px] flex gap-[26px] bg-[#ffff]">

              <label class="items-center justify-center cursor-pointer flex flex-1 gap-[20px]" @click="() => ActiveVeicolo(veicolo.id)" v-for="veicolo in this.veicoli" :key="veicolo.id" :id="veicolo.id">
                <div class="flex flex-col">
                  <div class="flex gap-[10px] items-center">
                    <input class="w-[10px] h-[10px] md:w-[16px] md:h-[16px] " :value="veicolo.id" type="radio" name="veicolo" />
                    <div class="veicoli" v-html="veicolo.svgIcon"></div>
                  </div>
                  <p class="text-secondary text-center">{{veicolo.nome}}</p>
                </div>
              </label>
              
              
            </div>
             <h3 id="error-veicolo" class="hidden text-center text-red-800 font-medium pt-[7px]" >Seleziona un veicolo</h3>

            <button @click="() => SearchPren()" class="mt-[14px] rounded-[11px] py-[14px] text-[#ffff] bg-secondary"><h3 class="font-semibold text-[24px]">CERCA</h3></button>
          </div>
        </div>
        
    </section>
</template>


<script>
import {en, es, it} from 'vuejs-datepicker/dist/locale'
export default{
  props: [ 'veicoli'],
  data(){
    return{
      ready: false,
      it: it,
      data_start: "",
      data_end: "",
      ora_start: "",
      ora_end: "''",
      sede: "",
      veicolo: "",
      FasciaOraria: {},
      orari_ingresso: ['00:00', '00:30', '01:00', '01:30', '02:00','02:30', '03:00','03:30', '04:00','04:30', '05:00','05:30', '06:00','06:30', '07:00','07:30', '08:00','08:30', '09:00','09:30', '10:00', '10:30', '11:00','11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
      orari_uscita: [],
      sede_info: {},
      state: {
       
      highlighted: {
       
          dates: [
            new Date(),
          ],
        }
      }
    }
  },
  methods: {
      SearchPren(){
      this.data_start = document.getElementById('data_start');
      this.data_end = document.getElementById('data_end');
      console.log(data_end.value);
      this.ora_start = document.getElementById('ora_start');
      this.ora_end = document.getElementById('ora_end');
      console.log(ora_end.value);
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
        let splitting = this.data_start.value.split('/');
        let data_convert_start =  splitting[1] + '/' + splitting[0] + '/' + splitting[2];
        splitting = this.data_end.value.split('/');
        let data_convert_end = splitting[1] + '/' + splitting[0] + '/' + splitting[2];

        


         let dataInizio = new Date(data_convert_start + " " + this.ora_start.value);
         let dataFine = new Date(data_convert_end + " " + this.ora_end.value);
         
         let daysBtwdate= Math.abs(dataFine.getTime() - dataInizio.getTime());
        daysBtwdate = daysBtwdate / (24 * 60 * 60 * 1000);
         console.log(daysBtwdate + ' GIORNI');
         let todayDate = new Date();
          
        if(todayDate > dataInizio){console.log('La data di oggi è maggiore della data inizio')}
        if(todayDate > dataFine){console.log('La data di oggi è maggiore della data di fine'); console.log('TODAY->'+todayDate); console.log('FINE->'+dataFine)}

        if(dataInizio >= dataFine || todayDate > dataInizio || todayDate > dataFine){
          document.getElementById('error-generic-ore').classList.remove('hidden');
          document.getElementById('error-veicolo').classList.add('hidden');
          document.getElementById('error-generic').classList.add('hidden');
        }
        else{
         //CALCOLOO TEMPORANEO 30 GIORNI
          let daysBtwdate= Math.abs(dataFine.getTime() - dataInizio.getTime());
          daysBtwdate = daysBtwdate / (24 * 60 * 60 * 1000);
          if(daysBtwdate >= 30){alert('La fuoriuscita dal listino di 30 giorni non è ancora prevista, inserire un ingresso & uscita con un periodo minore di un mese.')}
          else{
         this.$router.push('/prenotazione?data_start='+data_convert_start+'&ora_start='+this.ora_start.value+'&data_end='+data_convert_end+'&ora_end='+this.ora_end.value+'&veicolo='+this.veicolo.value+'&sede='+this.sede);
          }
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

  async mounted(){
   
let dx_day = new Date().getUTCDate();
   let dx = new Date();

   this.state.disabledDates =  {to: new Date(dx.getFullYear(),dx.getMonth(),dx_day),
        days: [6, 0],}
    //Prendo orario e chiusura
   const RangeLavoro = await this.$axios.$get('/sede/1');
   this.FasciaOraria = RangeLavoro.data;
   this.sede_info = RangeLavoro.data;
   
   //Rimuovo 00:08:00 -> :00 dalle stringhe, risultato -> 08:00
   let apertura = this.FasciaOraria.apertura.slice(0, 5);
   let chiusura =  this.FasciaOraria.chiusura.slice(0, 5);
   //Prendo l'indice di 08:00 nel mio array di orari ingresso e uscita
   //Successivamente faccio lo splice dell'array così da prendere da Posizione(08:00 in poi e )
   let index = this.orari_ingresso.indexOf(apertura);
   this.orari_ingresso = this.orari_ingresso.splice(index)


    //Combino gli orari di apertura alla chiusura per avere un range da un inizio
    this.orari_uscita = [...this.orari_ingresso];
    //Prendo gli indici dell'apertura e chiusura in uscita
    let u_a = this.orari_uscita.indexOf(apertura);
    let u_c = this.orari_uscita.indexOf(chiusura);
    //Prendo solo da apertura-uscita fino a chiusura-uscita tipo dalle 08:00 alle 22:00 -> 
    //08:00 - 21:30 (se c'è necessità fino alle 22:00 mettere uc+1)
    this.orari_uscita = this.orari_uscita.splice(u_a, u_c);
    //Tolgo dall'ingresso l'ora e mezza prima l'uscita
    let index_apertura = this.orari_ingresso.indexOf(apertura);
    let index_chiusura = this.orari_ingresso.indexOf(chiusura);
    this.orari_ingresso = this.orari_ingresso.splice(index_apertura, index_chiusura);
    
    setTimeout(() => this.ready = true, 3000);
     
  }

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