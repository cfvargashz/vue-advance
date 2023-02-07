const app = Vue.createApp({
    /*template: `
        <h1>
            Hola Mundo
        </h1>
        <p>
            {{ message }}
        </p>
    `,*/
    data() {
        return {
            quote: "I'm Batman",
            message: 'Cristian Vargas'
        }
    },
    methods: {
        changeQuote(e) {
            console.log(e)
            this.quote = "I'm Cristian"
            this.message = "Cristian"
            this.capitalize()
        },
        capitalize() {
            this.message = this.message.toUpperCase()
        }
    },
    watch: {
        
    }
})

app.mount('#app')