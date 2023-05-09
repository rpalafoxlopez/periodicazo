/*
export const myGetter = ( state ) =>{
 //return state;
}
TRAEN INFORMACION DEL STATE
*/

export const getEntriesByTerm = ( state ) => (term = '') => {
    if( term.length === 0 )
    {
        return state.entries
    }
    else
    {
        return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase()) )
    }

}

export const getEntryById = ( state  ) => (id = 'null') =>
{
    const entry = state.entries.find( entry => entry.id === id )
    if( !entry )
    {
        return
    }
    else
    {
        return { ...entry }
    }
}