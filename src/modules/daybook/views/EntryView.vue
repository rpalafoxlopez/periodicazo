<template>
    <template v-if="entry">
      <div class="entry-file d-flex justify-content-between p-2">
        <div>
          <span class="text-success fs-5 fw-bold">{{ day }}</span>
          <span class="mx-1 fs-5">{{ month }}</span>
          <span class="mx-2 fw-light">{{ yearDay }}</span>
        </div>

        <div>
          <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>

      <hr/>

      <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text">

        </textarea>
      </div>

      <img src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2019/09/09162546/imagen-vectorial-compressor.jpg"
           alt="entry - picture"
           class="img-thumbnail" />

    </template>

   <Fab icon="fa-save"
        @on:click="saveEntry"/>

</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapGetters} from "vuex";
import getDayMonthYear from '../helpers/getDayMonthYear'
export default {
  name: "EntryView",
  props:{
     id:
     {
         type: String,
         required:true
     }
  },
  components:{
     Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
  },
  data(){
     return{
        entry : null
     }
  },
  computed:{
    ...mapGetters('journal', ['getEntryById']) ,
    day(){
       const { day } = getDayMonthYear( this.entry.date )
       return day
    },
    month(){
      const { month } = getDayMonthYear( this.entry.date )
      return month
    },
    yearDay(){
      const { yearDay } = getDayMonthYear( this.entry.date )
      return yearDay
    }
  },
  methods:{
     loadEntry(){
        const entry = this.getEntryById( this.id )
       if( !entry ){
          this.$router.push({ name: 'no-entry' })
       }
       else
       {
          this.entry = entry
       }
     },
     async saveEntry(){
        console.log('click en el boton')
     }
  },
  created() {
       this.loadEntry()
  },
  watch:
  {
     id() {
         this.loadEntry()
     }
  }

}
</script>

<style lang="scss" scoped>
   textarea{
      font-size: 20px;
      border: none;
      height: 100%;

     &:focus{
        outline: none;
     }
   }

    img{
       width: 200px;
       position: fixed;
       bottom: 150px;
       right: 20px;
       box-shadow: 1px 1px 5px #333333;
    }

</style>