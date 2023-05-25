 /*
 export const myAction = async ({ commit }) =>{
 TAREAS ASYNCRONAS QUE LLAMAN MUTACIONES
 }
 */

 import authApi from '@/api/authApi'


 export const createUser = async ({ commit } , user) => {
    const { name, email, password} = user

    try {
       const { data } = await  authApi.post(':signUp', {email,password,returnSecureToken: true})
       const { idToken, refreshToken } = data
       console.log( data , commit , name)



        return { ok: true }
    }
    catch (error)
    {
        console.log( error.response )
        return { ok: false, message: error.response.data.error.message }
    }
 }