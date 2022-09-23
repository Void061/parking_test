<template>
    <div>
        <CheckoutInfo :nome="this.nome" :cognome="this.cognome" :mail="this.mail" :telefono="this.telefono" :targa="this.targa" :modello="this.modello" :fattura="this.fattura" :msg="this.msg" />
        <CheckoutPagamento />
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nome: '',
                cognome: '',
                modello: '',
                mail: '',
                telefono: '',
                targa: '',
                fattura: 0,
                msg: '',
            }
        },

        async mounted(){
            
            this.nome = this.$route.query.n;
            this.cognome = this.$route.query.c;
            this.mail = this.$route.query.m;
            this.telefono = this.$route.query.tel;
            this.targa = this.$route.query.tg;
            this.modello = this.$route.query.md;
            this.fattura = this.$route.query.f;
           

          

            
                this.msg = this.$route.query.msg;
           
            
        },
    }
</script>