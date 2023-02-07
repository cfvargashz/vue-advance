<template>
    <h2> {{ customTitle }} </h2>
    <p>{{ counter }}<sup>{{ exp }}</sup> = {{ getSquareCounter }} </p>
    <div><button v-on:click="increase">+1</button><button v-on:click="decrease">-1</button></div>
</template>

<script>
export default {
    name: 'Counter',
    // props: ['title'],
    props: {
        title: String,
        start: {
            type: Number,
            default: 2,
            validator(val) {
                return val > 20
            }   
        },
        
    },
    data() {
        return {
            counter: this.start,
            exp: 3,
        }
    },
    methods: {
        getSquare() {
            this.counter ** this.exp
        },
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        },
    },
    computed: {
        getSquareCounter() {
            console.log('Computed Square');
            return this.counter ** this.exp
        },
        customTitle() {
            return `Title: ${this.title || 'Without Title'}`
        }
    }
}
</script>

<style>
button {
    background-color: #64BBB7;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}
</style>