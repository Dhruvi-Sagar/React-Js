import {useState } from "react";
import {Link,useNavigate} from "react-router-dom";

const from = () =>
{
    const navigate = useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [gender, setGender] = useState([]);
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [allrecord, setallRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

    const handleCourseChange = (e) => 
    {
        const { value,checked} = e.target;
        if(checked)
        {
        setCourse([...course, value]);
        }
        else
        {
            setCourse(course.filter(cc => cc !== value))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !gender || !course || !date || !status) {
            alert("please add name,email,passwrd,gender,crse,date,stats");
            return;
        }

        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            email: email,
            password: password,
            gender: gender,
            course: course,
            date: date,
            status: status,
            status: "active",
        };
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("recrd add");
        navigate('/');
    };


}

return(
    
   <div className="react-router-dom">
        <form action=""  onSubmit={handleSubmit}>
            <div className="frm-ser">
                <div className="header d-flex">
                <h3>
                    add 
                </h3>
                <div className="frm-btn">
                    <Link to={`/`}> view</Link>
                </div>
                </div>

                <div className="frm-gender">
                    <div className="gender-name">
                        Name :- <input type="text" onChange= { (e) => setName(e.target.value)}  value={name} placeholder="enter name"/>   
                        <br />
                        email:- <input type="email" onChange= {(e) => setEmail(e.target.value) }value={email} placeholder="enter a email"/>
                        <br />
                        password:- <input type="password" onChange={(e) => setPassword(e.targer.value)} value={password} placeholder="enter password" />
                     </div>     

                     Gender:-
                     <label ><input type="radio" value="male" checked={gender === "male" } onChange={(e) => setGender(e.target.value)} />male</label>   
                     <label ><input type="radio" value="female" checked={gender === "female" } onChange={(e) => setGender(e.target.value)} />female</label> 

                     <div className="form-course">
                         Course:-
                        <label><input type="checkbox" value="html" checked={course.includes('css')} onChange={handleCourseChange} />css</label> 
                       <label><input type="checkbox" value="Js" checked={course.includes('Js')} onChange={handleCourseChange} />Js</label> &nbsp;
                       <label><input type="checkbox" value="React-Js" checked={course.includes('React-Js')} onChange={handleCourseChange} />React-Js</label> &nbsp;
                       <label><input type="checkbox" value="Ai" checked={course.includes('Ai')} onChange={handleCourseChange} />Ai</label> &nbsp;
                       <label><input type="checkbox" value="ps" checked={course.includes('ps')} onChange={handleCourseChange} />ps</label> &nbsp;
                       <label><input type="checkbox" value="BootStrap" checked={course.includes('BootStrap')} onChange={handleCourseChange} />BootStrap</label> &nbsp;
                       <label><input type="checkbox" value="Phython" checked={course.includes('Phython')} onChange={handleCourseChange} />Phython</label> &nbsp;
                     </div>

                     <div className="form-date">
                        date:- <input type="date"   onChange={(e) => setDate(e.target.value)} value={date} />
                     </div>

                     <div className="form-select">
                        <td>Select Status : <br /><select onChange={(e) => setStatus(e.target.value)} value={status}>
                            <option value="">----Select Status---</option> <br />
                            <option value="active">Active</option><br />
                            <option value="deactive">Deactive</option> <br />
                        </select></td>
                        </div>


                      <div className="form-submit">
                        <td><input type="submit" /></td>
                      </div>
            </div>
            </div>
        </form>
   </div>
)
export default form;