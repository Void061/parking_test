<template>
    <section class="mt-[136px] container mx-auto px-[20px] md:px-[81px]">
        <h2 class="font-bold text-[36px] text-secondary">La tua prenotazione</h2>
        <div class="mt-[54px] flex flex-col border-t-[1px] border-solid border-[#B4B4B4]">
            <div class="py-[80px] px-[20px] md:px-[124px] mt-[71px] bg-[#F8F8F8] rounded-[41px] gap-[35px] flex flex-col">
                    <div class="flex md:flex-row flex-col gap-[39px]">
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.nome}}</h4>
                        </div>
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.cognome}}</h4>
                        </div>
                    </div>
                    <div class="flex md:flex-row flex-col gap-[39px]">
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.telefono}}</h4>
                        </div>
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.mail}}</h4>
                        </div>
                    </div>
                    <div class="flex md:flex-row flex-col gap-[39px]">
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.modello}}</h4>
                        </div>
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[15px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.targa}}</h4>
                        </div>
                    </div>
                    <div class="flex gap-[39px]">
                        <div class="flex-1 pl-[10px] md:pl-[40px] pb-[97px] border-b-[1px] border-[#B4B4B4] border-solid">
                            <h4 class="text-secondary font-medium text-[20px]">{{this.msg}}</h4>
                        </div>
                        
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        props: ['nome', 'cognome', 'mail', 'targa', 'fattura', 'modello', 'msg', 'telefono'],
    }
</script>