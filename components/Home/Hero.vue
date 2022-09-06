<template>
    <section class="bg-primary h-screen">
        <div class="md:px-[80px] h-full container flex justify-center md:justify-start items-center relative mx-auto">
          <img class="z-[1] absolute bottom-0 right-[5%]" src="hand.png" alt="prenotazioni" />
          <div class="z-[2] flex flex-col md:min-w-[546px]">
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
                <h4 class="text-center text-secondary font-medium text-[20px]">Ingresso</h4>
                <input class="mt-[10px] py-[8px] border-[1px] border-solid border-red-500 " type="date" />
                <input class="mt-[10px] py-[8px] border-[1px] border-solid border-red-500 " type="time" />
              </div>
               <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">Ingresso</h4>
                <input class="border-[1px] py-[8px] border-solid border-red-500 mt-[10px]" type="date" />
                <input class="border-[1px] py-[8px] border-solid border-red-500 mt-[10px]" type="time" />
              </div>
            </div>

            <button class="mt-[14px] rounded-[11px] py-[14px] text-[#ffff] bg-secondary"><h3 class="font-semibold text-[24px]">CERCA</h3></button>
          </div>
        </div>
    </section>
</template>