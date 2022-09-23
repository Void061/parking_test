<template>
    <section class="px-[20px] py-[100px] md:py-[136px] mx-auto md:px-[81px] container">
        
        <h2 class="font-bold text-[36px] text-secondary">Garage Olimpico Ottaviano</h2>
         
        <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] flex flex-col gap-[20px]">
            <div class="flex-col md:flex-row flex gap-[20px] md:gap-[44px]">
                <input id="nome" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="NOME" />
                <input id="cognome" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="COGNOME" />
            </div>
            <div class="flex flex-col md:flex-row gap-[20px] md:gap-[44px]">
                <input id="telefono" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TELEFONO" />
                <input id="mail" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MAIL" />
            </div>
            <div class="flex md:flex-row flex-col gap-[20px] md:gap-[44px]">
                <input id="modello" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MODELLO DEL VEICOLO" />
                <input id="targa" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TARGA" />
            </div>
            <div class="flex gap-[44px]">
                <textarea id="msg" placeholder="MESSAGGIO" class="h-[131px] flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]"></textarea>
            </div>
            <div class="flex gap-[35px] items-center">
                <label class="mt-[-18px] custom-checkbox">
                    <input class="" id='consenti-dati' type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                
                <h5 class="font-medium text-[18px] text-[#B4B4B4]">Acconsento al trattamento dei dati</h5>
            </div>
        </div>

        <h2 class="mt-[100px] md:mt-[137px] font-bold text-[36px] text-secondary">RIEPILOGO PRENOTAZIONE</h2>
         <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] px-[20px] flex flex-col lg:flex-row md:justify-center lg:justify-between">
             <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">{{this.nome}}</h4>
                </div>
                  <div class="mt-[30px] veicolo-m veicolo-w" v-html="this.icon"></div>
                
             </div>
              <div class="lg:mt-0 mt-[50px] flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA INGRESSO</h4>
                </div>
                 <div class=" mt-[10px] lg:mt-[38px] flex items-center gap-[28px]">
                     <img src="/img/icon_data.png" alt="data" />
                     <h5 class=" text-[#B4B4B4] font-medium text-[18px]">{{this.data_i}}</h5>
                 </div>
                <div class="mt-[20px] lg:w-full flex items-center gap-[28px]">
                    <img src="/img/clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.ora_i}}</h5>
                 </div>
             </div>
             <div class="lg:mt-0 mt-[50px] flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA USCITA</h4>
                </div>
                 <div class="mt-[10px] lg:mt-[38px] flex items-center gap-[28px]">
                     <img src="/img/icon_data.png" alt="data" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.data_f}}</h5>
                 </div>
                 <div class="mt-[20px] lg:w-full flex items-center gap-[28px]">
                    <img src="/img/clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.ora_f}}</h5>
                 </div>
             </div>
               <div class="lg:mt-0 mt-[50px] flex flex-col items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">PAGA ONLINE</h4>
                </div>
                 <div class="mt-[38px]">
                      <div class=" flex items-center gap-[28px]">         
                     </div>
                     <button class="px-[28px] py-[8px] rounded-[11px] flex items-center h-[46px]text-secondary bg-primary">
                         <h3 class="text-secondary font-semibold text-[24px]">€ {{this.prezzo}}</h3>
                         
                         </button>
                 </div>
                
             </div>
          
             
        </div>

        <div class="pb-[55px] border-b-[1px] border-solid border-[#B4B4B4] mt-[100px] md:mt-[152px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ORARIO DI APERTURA</h4>
            <h4 class="max-w-[953px] mt-[34px] text-[#B4B4B4] font-medium text-[20px]">
                Dal Lunedì al Sabato dalle 06:00 all'1:00. Domenica e festivi dalle 06:00 alle 10:00 e dalle 18:00 all'1:00.
                Dal 09 al 31 agosto il parcheggio sarà aperto dalle 06:00 alle 10:00 e dalle 18:00 alle 01:00.
            </h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input id='orario-ridotto' class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Ho preso nota dell'orario ridotto del parcheggio</h5>
            </div>
        </div>
        <div class="pb-[55px] border-b-[1px] border-solid border-[#B4B4B4] mt-[50px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ALTRE INFORMAZIONI</h4>
            <h4 class="max-w-[953px] mt-[34px] text-[#B4B4B4] font-medium text-[20px]">
                Le chiavi del veicolo devono essere consegnate agli addetti.
            </h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input id='chiavi-regola' class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Ho preso nota del regolamento</h5>
            </div>
        </div>
        <div class="pb-[55px] mt-[50px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ALTRE INFORMAZIONI</h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input id="fattura" class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Richiedi fattura</h5>
            </div>
            <button @click="Checkout()" class="mt-[95px] mx-[10px] py-[20px] bg-primary rounded-[11px]"><h3 class="text-secondary text-[24px] font-semibold">CONFERMA</h3></button>
        </div>
    </section>
</template>


<script>
export default {
    props: ['nome', 'prezzo', 'icon', 'data_i' , 'data_f', 'ora_i', 'ora_f', 'v'],
    data(){
        return{
            veicolo_info: '',
        }
    },
    async mounted(){
           
    },
    methods:{
        Checkout(){

            let consenti_dati = document.getElementById('consenti-dati');
            let orario_ridotto = document.getElementById('orario-ridotto');
            let chiavi_regola = document.getElementById('chiavi-regola');
            let fattura_conferma = document.getElementById('fattura');
            let nome = 1;
            let cognome = 1;
            let tel = 1;
            let targa = 1;
            let mail = 1;
            let modello = 1;
            let msg = 1;
            let fattura = 1;
            if(consenti_dati.checked && orario_ridotto.checked && chiavi_regola.checked){
                if(fattura_conferma.checked){
                    fattura = 1;
                    nome = document.getElementById('nome').value;
                    cognome = document.getElementById('cognome').value;
                    tel = document.getElementById('telefono').value;
                    targa = document.getElementById('targa').value;
                    mail = document.getElementById('mail').value;
                    modello = document.getElementById('modello').value;
                    msg = document.getElementById('msg').value;
                  
                    if(nome != "" && nome != undefined && cognome != "" && cognome != undefined && tel != "" && tel != undefined && targa != "" && targa != undefined && mail != "" && mail != undefined && modello != "" && modello != undefined){
                        this.$router.push('/checkout?n='+nome+'&c='+cognome+'&tel='+tel+'&m='+mail+'&tg='+targa+'&md='+modello+'&msg='+msg+'&f='+fattura)
                    }

                }
            }
            
            
        }
    }
   
}
</script>

<style>

.veicolo-w svg{
    height: 70px !important;
    width: 70px;

}
.custom-checkbox{
    display: block;
  position: relative;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  border: 2px solid #B4B4B4;
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: transparent;
}

/* When the checkbox is checked, add a blue background */
.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196F3;
  border: 0;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.custom-checkbox .checkmark:after {
  left: 5px;
  top: 3px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>