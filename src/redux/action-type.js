export  const GET_PROFILE_ACTION = "GET_PROFILE";


export function createActionType(type){
    return {
        initial: type,
    }
}