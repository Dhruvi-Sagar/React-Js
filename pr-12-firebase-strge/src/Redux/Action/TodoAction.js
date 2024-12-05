import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
// import { app } from "../../firebase"
import { app} from "../../firebase";
const db = getFirestore(app)

export const view = () => {
    return async (dispatch) => {
        try{
            const data = collection(db , "users")
            const userList = await getDocs(data)
            const record = userList.docs.map(doc => ({
                id : doc.id,
                ...doc.data()
            }))
            dispatch({
                type : "view",
                payload : record
            })
        }
        catch(err){
            dispatch({
                type : "viewuse",
                payload : err
            })
        }
    }
}

export const addUser = (user) => {
    return async (dispatch) => {
        try{
           let add = await addDoc(collection(db,"users"),{
                name : user.name,

           }) 
           dispatch({
                type : "add"
           })
        }
        catch(err){
            console.log(err);
            return false
        }
    }
}

export const deleteUse = (id) => {
    return async (dispatch) => {
        try{
           let deleteData = await doc(db,"users",id)
           await deleteDoc(deleteData)
           dispatch({
            type : 'delete',
            payload : id
           })
        }
        catch(err){
            console.log(err);
            return false
        }
    }
}