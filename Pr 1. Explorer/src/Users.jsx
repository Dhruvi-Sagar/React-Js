import { Component } from "react";

class Users extends Component {
    render() {
        return (
            <div>
                <h2 align="center">Users Data</h2>
                    <table align="center" >
                        <thead>
                            <tr>
                                <th>Grid</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Passwrd</th>
                                <th>Course</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.us.map((data, i) => (
                                       <tr >
                                       <td>{data.grid}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>{data.course.join(" , ")}</td>
                                        <td>{data.city}</td>
                                       </tr>
                            ))
                        }
                        </tbody>
                    </table>
                
            </div>
        );
    }
}
export default Users