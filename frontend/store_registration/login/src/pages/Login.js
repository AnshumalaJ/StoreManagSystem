import React,{ useEffect,useState} from "react";
import { Link,useHistory } from 'react-router-dom';
import '../styles/Form.css';
import userService from "../service/UserService"

function Login(props) {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            // history.push("/add")
        }
    },[])

    function login(){
        console.warn(email,password);
        const userdetails={email,password};
        userService.authenticate(userdetails)
        .then(response => {
            console.log("user is validated", response.data);
             sessionStorage.setItem("validated_date",response.data);
         if (response.data.role === "ADMIN") 
            history.push("/admin-home");
            // } else if (response.data.role === "SUPPLIER") {
            //   props.history.push("/supplier-home");
            // } else if (response.data.role === "SALESMAN") {
            //   props.history.push("/salesman-home");
            // } 
        })
        .catch(error => {
            console.log('something went wroing', error);
        })

    }

    let red = { color: "red" };
    let padleft = {paddingLeft: '30px'};

    return (
        <>
            <div className="contains">
                <div className="info">
                    <div className="sign_text">
                        <h3>New User?</h3>
                        
                        <br />
                        <button type="button" id="accbtn"><Link style={{textDecoration:'none'}} to='/Signup'><b>Register</b></Link></button>
                    </div>
                </div>
                <div id="signin">
                    <form className="sign_form" style={padleft} method='post'>
                        <h2 style={{ color: "rgb(71, 167, 231)" }}>LOGIN</h2>
                        <table>
                            <tr><td>Email<span style={red}>*</span> </td></tr>
                            <tr><td><input type="text" className="usermail" name="login" required="true" autoFocus autoComplete="false" onChange={(e)=>setEmail(e.target.value)}/></td></tr>
                            <tr><td><br /></td></tr>
                            <tr><td>Password<span style={red}>*</span> </td></tr>
                            <tr><td><input type="password" className="userpass" name="login" required onChange={(e)=>setPassword(e.target.value)}/></td></tr>
                            <tr><td><br /><br /></td></tr>
                        </table>
                        <Link to='/log'><input type="submit" value="LOGIN" id="loginbtn" name="login" onClick={login}/></Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;