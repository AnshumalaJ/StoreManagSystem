import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserService from '../../service/UserService';

const UserList = () => {

  const [users, setusers] = useState([]);

  const init = () => {
    UserService.getAll()
      .then(response => {
        console.log('Printing users data', response.data);
        setusers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    UserService.remove(id)
      .then(response => {
        console.log('user deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of users</h3>
      <hr/>
      <div>
        <Link to="/admin/add" className="btn btn-primary mb-2">Add User</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>password</th>
              <th>role</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <Link className="btn btn-info" to={`/users/edit/${user.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(user.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default UserList;