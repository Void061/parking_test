<template>
    <section class="py-[136px] mx-auto px-[81px] container">
        <h2 class="font-bold text-[36px] text-secondary">Garage Olimpico Ottaviano</h2>
        <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] flex flex-col gap-[20px]">
            <div class="flex gap-[44px]">
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="NOME" />
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="COGNOME" />
            </div>
            <div class="flex gap-[44px]">
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TELEFONO" />
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MAIL" />
            </div>
            <div class="flex gap-[44px]">
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MODELLO DEL VEICOLO" />
                <input class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TARGA" />
            </div>
            <div class="flex gap-[44px]">
                <textarea placeholder="MESSAGGIO" class="h-[131px] flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]"></textarea>
            </div>
            <div class="flex gap-[35px] items-center">
                <label class="mt-[-18px] custom-checkbox">
                    <input class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                
                <h5 class="font-medium text-[18px] text-[#B4B4B4]">Acconsento al trattamento dei dati</h5>
            </div>
        </div>

        <h2 class="mt-[137px] font-bold text-[36px] text-secondary">RIEPILOGO PRENOTAZIONE</h2>
         <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] px-[20px] flex justify-between">
             <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">COPERTO AUTO PICCOLA</h4>
                </div>
                 <div class="mt-[38px]">
                     <img src="car.png" alt="car" />
                 </div>
                 <div class="mt-[20px] flex flex-col">
                    <p class="text-[13px] text-secondary font-medium">Max 3.9 m.</p>
                 </div>
             </div>
               <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA INGRESSO</h4>
                </div>
                 <div class="mt-[38px] flex items-center gap-[28px]">
                     <img src="icon_data.png" alt="data" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">02/09/2022</h5>
                 </div>
                 <div class="w-full mt-[20px] flex items-center gap-[28px]">
                    <img src="clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">14:30</h5>
                 </div>
             </div>
             <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA USCITA</h4>
                </div>
                 <div class="mt-[38px] flex items-center gap-[28px]">
                     <img src="icon_data.png" alt="data" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">02/09/2022</h5>
                 </div>
                 <div class="w-full mt-[20px] flex items-center gap-[28px]">
                    <img src="clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">22:30</h5>
                 </div>
             </div>
               <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">PAGA ONLINE</h4>
                </div>
                 <div class="mt-[38px]">
                      <div class=" flex items-center gap-[28px]">         
                     </div>
                     <button class="px-[18px] py-[8px] rounded-[11px] flex items-center justify-between w-[152px] h-[46px]text-secondary bg-primary">
                         <h3 class="text-secondary font-semibold text-[24px]">€ 20,20</h3>
                         <img src="arrow-right.png" alt="arw_right" />
                         </button>
                 </div>
                
             </div>
          
             
        </div>

        <div class="pb-[55px] border-b-[1px] border-solid border-[#B4B4B4] mt-[152px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ORARIO DI APERTURA</h4>
            <h4 class="max-w-[953px] mt-[34px] text-[#B4B4B4] font-medium text-[20px]">
                Dal Lunedì al Sabato dalle 06:00 all'1:00. Domenica e festivi dalle 06:00 alle 10:00 e dalle 18:00 all'1:00.
                Dal 09 al 31 agosto il parcheggio sarà aperto dalle 06:00 alle 10:00 e dalle 18:00 alle 01:00.
            </h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input class="" type="checkbox" />
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
                    <input class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Ho preso nota dell'orario ridotto del parcheggio</h5>
            </div>
        </div>
        <div class="pb-[55px] mt-[50px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ALTRE INFORMAZIONI</h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Richiedi fattura</h5>
            </div>
            <button class="mt-[95px] mx-[10px] py-[20px] bg-primary rounded-[11px]"><h3 class="text-secondary text-[24px] font-semibold">CONFERMA</h3></button>
        </div>
    </section>
</template>


<style scoped>
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
  left: 6px;
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