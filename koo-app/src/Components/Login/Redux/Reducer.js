
let obj={
    isAuth:false,
    obj:{}
}

export const myReducer=(state=obj,action)=>{

    switch(action.type){

        case "Authentication" :

            return {
                ...state,isAuth:action.Payload
            }
            case "AuthenticationData":

            return {
                ...state,obj:action.Payload
            }

            default: return state

        
    }

   



}