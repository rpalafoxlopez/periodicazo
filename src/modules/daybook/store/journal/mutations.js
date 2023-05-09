/*
export const myMutation = ( state ) =>{
 //return state;
}
  modificación del state
*/


export const setEntries = ( state , entries) => {
   state.entries = [ ...state.entries, ...entries]
   state.isLoading = false
}
export const updateEntry = (/* state */) =>{

}
export const addEntry = (/* state */) =>{

}