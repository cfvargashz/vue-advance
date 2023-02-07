<template>
  <div>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="14" :showPokemon="false" />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
export default {
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>