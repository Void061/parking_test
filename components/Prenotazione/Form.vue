<template>
      <section class="px-[81px]  py-[136px] mx-auto  container">
        <h2 class="font-bold text-[36px] text-secondary">Trova il tuo parcheggio</h2>
        <div class="px-[11px] mt-[25px] flex bg-[#ffff] items-center gap-[28px]">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="22" transform="translate(1 1)" fill="white"/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <h4 class="font-medium text-[20px] text-secondary">Garage olimpico ottaviano</h4>
        </div>

        <div class="flex mt-[35px] gap-[44px] ">
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data" />
                    <input class="pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data" />
                    <input class="pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                </div>
            </div>
            <div class="flex-1 flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data" />
                    <input class="pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                </div>
                 <div class="relative p-[20px] mt-[20px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="icon_data.png" alt="data" />
                    <input class="pl-[50px] absolute top-0 bottom-0 left-0 w-full" type="text" />
                </div>
            </div>
        </div>
        <div class="flex md:px-[11px] mt-[35px] justify-between">

            <div class="flex gap-[30px]">
                <input name="veicolo" type="radio" />
                <img name="veicolo" src="car.png" alt="car" />
            </div>
            <div class="flex gap-[30px]">
                <input name="veicolo" type="radio" />
                <img src="car.png" alt="car" />
            </div>
            <div class="flex gap-[30px]">
                <input name="veicolo" type="radio" />
                <img src="car.png" alt="car" />
            </div>
            <div class="flex gap-[30px]">
                <input name="veicolo" type="radio" />
                <img src="car.png" alt="car" />
            </div>
        </div>

        <button class="mt-[50px] py-[14px] w-full bg-secondary rounded-[11px]"><h3 class="text-[#ffff] text-[24px] font-semibold">CALCOLA</h3></button>
        
        <div class="mt-[60px] flex justify-center"><img class="cursor-pointer" src="arrow_bottom.png" alt="arrow_bottom" /></div>
       
    </section>
</template>