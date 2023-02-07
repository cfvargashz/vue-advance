<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @selection-pokemon="selectionPokemon" />
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
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonNames() {
      this.pokemons = await getPokemonsOptions()
      const randomPokemon = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[randomPokemon]
    },
    selectionPokemon(selectedPokemon) {
      if (selectedPokemon.id === this.pokemon.id) {
        this.showPokemon = true
      }
    }
  },
  mounted() {
    this.mixPokemonNames()
  },
}
</script>