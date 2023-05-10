 /*
 export const myAction = async ({ commit }) =>{
 TAREAS ASYNCRONAS QUE LLAMAN MUTACIONES
 }
 */
 import journalApi from "@/api/journalApi";
 export const loadEntries = async ({  commit  }) => {
      const{ data } = await  journalApi.get('/entries.json')

     if( data )
     {
         const entries = []
         for( let id of Object.keys(data) ){
             entries.push({
                 id,
                 ...data[id]
             })
         }

         commit('setEntries', entries)
     }
     else{
         return commit('setEntries', [])
     }

 }

 export const updateEntry = async ({  commit  }, entry) =>
 {
    const {date, picture, text} = entry
    const dataToSave = { date, picture, text }

    const resp = await journalApi.put(`/entries/${ entry.id }.json`, dataToSave )

    console.log( resp )
    commit('updateEntry', { ...entry })
 }

 export const createEntry= async ({ commit }, entry) => {

      const {date, picture, text} = entry
      const dataToSave = { date, picture, text }

      const { data } = await journalApi.post(`/entries.json`, dataToSave )
      dataToSave.id = data.name

      commit('addEntry', dataToSave)

      return data.name

 }

 export const deleteEntry= async ({ commit }, id) => {

     await journalApi.delete(`/entries/${ id }.json`)
     commit('deleteEntry', id)

 }

