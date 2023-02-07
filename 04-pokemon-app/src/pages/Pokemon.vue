<template>
  <h1 v-if="!pokemon">Hold on sec...</h1>
  <div v-else>
    <h1>¿Which Pokemon is this?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @selection-pokemon="selectionPokemon" />
    <div v-if="message">
      <h2>{{ message }}</h2>
      <button @click="resetGame">Reset Game</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonsOptions from '@/helpers/getPokemonsOptions';
export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonNames() {
      this.pokemons = await getPokemonsOptions()
      const randomPokemon = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[randomPokemon]
    },
    selectionPokemon(selectedPokemon) {
      this.showPokemon = true
      if (selectedPokemon.id === this.pokemon.id) {
        this.message = `Yeah you're right`
      } else {
        this.message = `Opps, it is not correct, the pokemon is ${this.pokemon.name}`
      }
    },
    resetGame() {
      console.log('RESET GAME')
      this.message = ''
      this.showPokemon = false
      this.pokemon = null
      this.mixPokemonNames()
    }
  },
  mounted() {
    this.mixPokemonNames()
  },
}
</script>