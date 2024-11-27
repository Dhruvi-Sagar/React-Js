import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setgender] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [editid, setEditid] = useState('');


    const [allrecord, setallrecord] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    );


    useEffect(() => {
        if (location?.state) {
            setName(location.state.name);
            setEmail(location.state.email);
            setgender(location.state.gender);
            setCourse(location.state.course);
            setDate(location.state.date);
            setEditid(location.state.id)
        }
    }, [location?.state]);

    const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCourse([...course, value]);
        }
        else {
            setCourse(course.filter(c => c !== value)
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedRecords = allrecord.map((val) => {
            if (val.id === editid) {
                return { ...val, name: name, email: email, gender: gender, course: course, date: date, }
            }
            return val;
        });

        localStorage.setItem('users', JSON.stringify(JSON.stringify(updatedRecords))));
        alert('update ');
        navigate('/');
    }



    return (

        <div className="router-edit">
            <form onSubmit={handleSubmit}>
                <div className="edit">
                    <div className="edit-header">
                        <h3>add User</h3>
                        <div className="edit-btn">
                            <Link to={`/`}>view</Link>
                        </div>
                    </div>

                    <div className="edit-icn">
                        <div className="edit-n">
                            Name:- <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            Email:-  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        Gender:- <label ><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setgender(e.target.value)} />male</label>
                        <label ><input type="radio" value="female" checked={gender === "female"} onChange={(e) => setgender(e.target.value)} />female</label>

                        <div className="edit-crse">

                            Course :-
                            <label><input type="checkbox" value="html" checked={course.includes('css')} onChange={handleCourseChange} />css</label>
                            <label><input type="checkbox" value="Js" checked={course.includes('Js')} onChange={handleCourseChange} />Js</label> &nbsp;
                            <label><input type="checkbox" value="React-Js" checked={course.includes('React-Js')} onChange={handleCourseChange} />React-Js</label> &nbsp;
                            <label><input type="checkbox" value="Ai" checked={course.includes('Ai')} onChange={handleCourseChange} />Ai</label> &nbsp;
                            <label><input type="checkbox" value="ps" checked={course.includes('ps')} onChange={handleCourseChange} />ps</label> &nbsp;
                            <label><input type="checkbox" value="BootStrap" checked={course.includes('BootStrap')} onChange={handleCourseChange} />BootStrap</label> &nbsp;
                            <label><input type="checkbox" value="Phython" checked={course.includes('Phython')} onChange={handleCourseChange} />Phython</label> &nbsp;

                        </div>

                        <div className="edit-date">
                            Date:- <input type="date" name='' id='' onChange={(e) =>
                                setDate(e.target.value)} />
                        </div>

                        <div className="edit-update d-flex">
                            <input type="submit" value="update" />
                        </div>



                    </div>
                </div>

            </form>
        </div>
    )

}
export default edit;