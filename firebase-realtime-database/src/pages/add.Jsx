import { useState } from "react"
import { getDatabase , ref,set } from "firebase/database";
import { app } from "../firebase.js";
import { Link } from "react-router-dom";

function Add () {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) =>
     {
        e.preventDefault();

        const db = getDatabase(app)
        let id = Math.floor((Math.random) * 1000000);
        set(ref(db, `users/${id}`),
            {
                name: name,
                phone: phone
            })
    }

    return (
        <>
            <div>
                <h3>
                    ADD RECORD
                </h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:-</label>
                    <br />
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                    <label htmlFor="phone">Phone:-</label>
                    <br />
                    <br />
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />

                    <input type="submit" />
                </form>

                <Link to={`/`}></Link>
            </div>


        </>
    )
}

export default Add
