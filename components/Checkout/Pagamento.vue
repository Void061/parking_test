<template>
    <section class="mt-[58px] container mx-auto px-[81px]">
        <h2 class="font-bold text-[36px] text-secondary">Scegli il metodo di pagamento</h2>
        <div class="pb-[131px] mt-[54px] flex flex-col border-t-[1px] border-solid border-[#B4B4B4]">
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex gap-[52px]">
                    <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[20px]">Paga con carta</h4>
                </div>
                <div class="flex">
                    <img src="credit_cards.png" alt="cards" />
                </div>
            </label>  
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex gap-[52px]">
                    <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[20px]">Paga con il tuo conto Paypal</h4>
                </div>
                <div class="flex">
                    <img src="paypal_logo.png" alt="cards" />
                </div>
            </label>   
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex gap-[52px]">
                    <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[20px]">Paga con Satispay</h4>
                </div>
                <div class="flex">
                    <img src="satispay_logo.png" alt="satispay" />
                </div>
            </label>   
            <label class="cursor-pointer h-[90px] border-[1.5px] px-[40px] py-[10px] border-solid border-[#B4B4B4] mt-[54px] flex justify-between items-center">
                <div class="flex gap-[52px]">
                    <input type="radio" name="pagamento" />
                    <h4 class="text-[#B4B4B4] font-medium text-[20px]">Paga con Bonifico</h4>
                </div>
            </label> 

            <button class="rounded-[11px] py-[21px] bg-primary mt-[78px]"><h3 class="text-[24px] text-secondary font-semibold">CONFERMA E PAGA</h3></button>   
        </div>
    </section>
</template>


<style scoped>
label h4{
    transition: .2s all;
}
label input:checked ~ h4{
    color: #143793;
}
</style>