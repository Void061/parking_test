<template>
    <section class="min-h-[700px] bg-primary h-screen">

        <div class="px-[20px] md:px-[80px] h-full container flex justify-center md:justify-start items-center relative md:mx-auto">
          <img class="z-[1] absolute md:block hidden bottom-0 right-[5%]" src="hand.png" alt="prenotazioni" />
          <div class="z-[2] flex flex-col max-w-[500px] md:max-w-[unset] md:min-w-[546px]">
           
            <h2 class="text-secondary font-bold text-[36px]">Trova il tuo parcheggio</h2>
            <div class="mt-[18px] flex gap-[20px] items-center px-[20px] py-[13px] bg-[#ffff] ">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="22" transform="translate(1 1)" fill="white"/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 class="text-secondary font-medium text-[20px]">Inserisci destinazione</h4>
            </div>
            <div class="mt-[8px] flex gap-[8px]">
              <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data-ingresso" />
                    <input id="data_start" datepicker placeholder="Data ingresso" class="border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                    
                </div>
               
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="clock_icon.png" alt="orario-ingresso" />
                    <div class="timepicker" data-mdb-with-icon="false" id="input-toggle-timepicker">
                    <input id="ora_start" data-mdb-toggle="input-toggle-timepicker" placeholder="Orario ingresso" class="border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                    </div>
                </div>
              </div>
               <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data-uscita" />
                    <input id="data_end" datepicker placeholder="Data uscita" class="border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                </div>
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="clock_icon.png" alt="orario-uscita" />
                    <div class="timepicker" data-mdb-with-icon="false" id="input-toggle-timepicker">
                    <input id="ora_end" data-mdb-toggle="input-toggle-timepicker" placeholder="Orario uscita" class="border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                    </div>
                </div>
                 
              </div>
            </div>
            <div class="px-[20px] mt-[8px] py-[18px] flex gap-[26px] bg-[#ffff]">

              <label class="items-center cursor-pointer flex flex-1 gap-[20px]" @click="() => ActiveVeicolo(veicolo.id)" v-for="veicolo in this.veicoli" :key="veicolo.id" :id="veicolo.id">
                <input class="w-[10px] h-[10px] md:w-[16px] md:h-[16px] " :value="veicolo.id" type="radio" name="veicolo" />
                <div class="veicoli" v-html="veicolo.svgIcon"></div>
              </label>
              
              
            </div>

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
    testing(){
      alert(1);
    },
    SearchPren(){
      this.data_start = document.getElementById('data_start');
      this.data_end = document.getElementById('data_end');
      this.ora_start = document.getElementById('ora_start');
      this.ora_end = document.getElementById('ora_end');
      this.sede = 1;
      this.veicolo = document.querySelector('input[name="veicolo"]:checked');
      
      if(this.data_start.value == undefined || this.data_start.value.trim() == ""){
          console.log(1);
      }
      else if(this.data_end.value == undefined || this.data_end.value.trim() == ""){
         console.log(1);
      }
       else if(this.ora_end.value == undefined || this.ora_end.value.trim() == ""){
         console.log(1);
      }
       else if(this.ora_start.value == undefined || this.ora_start.value.trim() == ""){
         console.log(1);
      }
      else if(this.veicolo?.value){
        //OK
        this.$router.push('/prenotazione?data_start='+this.data_start.value+'&ora_start='+this.ora_start.value+'&data_end='+this.data_end.value+'&ora_end='+this.ora_end.value+'&veicolo='+this.veicolo.value+'&sede='+this.sede);
      }
      else{
        console.log(11);
       
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
 head: {
    script: [
      {
        type: "application/javascript",
        src: "https://unpkg.com/flowbite@1.5.3/dist/datepicker.js",
      },
      {
        type: "application/javascript",
        src: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js",
      },
      {
        type: "application/javascript",
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
      },
     
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css",
      }
      
    ]

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



@media only screen and (max-width: 600px) {
  .veicoli svg{
  width: 35px !important;
}
}

</style>