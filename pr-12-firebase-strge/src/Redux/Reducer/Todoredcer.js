const initialState = {
    user : [],
}

const crud = (state=initialState , action) => {
    switch(action.type){
        case 'view' : 
            return {
                ...state,
                user : action.payload,
                error : null
            }

        case 'viewuse' :
            return {
                ...state,
                error : action.payload
            }

        case 'addrecord' :
             return {
                ...state,
                user : [...state.user],
                error : null
            }

        case 'delete' :
            return {
                ...state,
                user : state.user.filter(val => val.id != action.payload),
                error : null
            }

        default :
            return state
    }
}

export default crud