import { useState } from "react"

const add = () =>
{
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefalult(); 
        let id = Math.floor(Math.random() * 100000);
        set(ref(DB,`users/${id}`),
        {
           name:name,
           phone:phone 
        });
        alert("reacord succesfull added!!!");
        setName("");
        setPhone("");
    }


    return(

        <div>
             <h2>
                ADD
             </h2>
             <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            Name :-
                        </td>

                        
                        <td>
                            <input type="text" onchange={(e)=>setName(e.target.value)} value={name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone :-
                        </td>
                        <td>
                            <input type="text" onchange={(e)=>setName(e.target.value)} value={phone} />
                        </td>
                    </tr>
                </table>

             </form>
        </div>
    )
}
export default add