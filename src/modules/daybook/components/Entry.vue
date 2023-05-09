<template>
    <div class="entry-container mb-3 pointer p-2"
         @click="$router.push({ name:'entry' , params: { id: entry.id }})" >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{ dia }}</span>
            <span class="mx-1 fs-5">{{ month}}</span>
            <span class="mx-2 fw-light">{{ yearDay }} </span>
        </div>

        <div class="entry-description">
             {{ shortText }}
        </div>
    </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
  name: "Entry",
  props:{
    entry: {
      type: Object,
      required: true,
    },
  },
  computed:{
     shortText(){
        return ( this.entry.text.length > 130 )
               ? this.entry.text.substring(0, 130) + '...'
               : this.entry.text
     },
     month() {
       const d = new Date( this.entry.date );

       return months[d.getMonth()]
     },
    yearDay() {
      const d = new Date( this.entry.date );
      return `${ d.getFullYear() }, ${ days[ d.getDay() ] }`
    },
    dia() {
      const d = new Date( this.entry.date );
      return d.getDate()
    },
  },
}
/*
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
*/
/*
* props:{
  id:{
     type: Number,
     require: true
  },
  date:{
     type: Date,
     require: true
  },
  text:{
     type: String,
     require: true
  },
  picture:{
     type: String
  }
},
methods:{
   getProps()
   {
        console.log( this.$store.state )
   }
}*/
</script>

<style lang="scss" scoped>
  .entry-container
  {
     border-bottom: 1px solid #2c3e50 ;
     transition: 0.2s all ease-in;

     &:hover{
        background-color: lighten( $color:grey, $amount: 45);
        transition: 0.2s all ease-in;
     }

      .entry-title
      {
         font-weight: bold;
         text-transform: capitalize;
      }

      .entry-description
      {
         font-size: 13px;
      }
  }


</style>