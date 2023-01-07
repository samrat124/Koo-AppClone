
let obj={
    isAuth:false
}

export const myReducer=(state=obj,action)=>{

    switch(action.type){

        case "Authentication" :

            return {
                ...state,isAuth:action.Payload
            }

            default: return state

        
    }

   



}