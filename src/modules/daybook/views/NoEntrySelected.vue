<template>
  <div class="d-flex justify-content-center">
     <h1 class="align-self-center">   No hay nada seleccionado </h1>
  </div>
  <Fab :icon="icon"
       @on:click="saveEntry"/>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "NoEntrySelected",
  data(){
    return {
      icon: 'fa-plus'
    }
  },
  components: {
     Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  methods:{
    async saveEntry(){
      console.log('click en el boton')
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    height: 100%;
  }

</style>