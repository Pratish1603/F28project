import { useState } from 'react';
import Cookies from 'js-cookie';
import './index.css';

const Login = ()=> {

    const [allValus,setValuse] = useState ({
        username : "",
        password : "",
        errorMsg : ""
       
    })

    const onSubmitUserData = async(e) => {

        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails ={
            username : allValus.username,
            password : allValus.password
        }

        const option ={
            method : "POST",
            body : JSON.stringify(userDetails)
           
        }

        try{
            const response = await fetch(api,option);

            const data = await response.json();

            console.log( data.error_msg);

            if(response.ok === true){

                setValuse({...allValus,errorMsg : ""});
                
                Cookies.set("jwtToken" , data.jwt_token)

            }
            else{

                setValuse({...allValus,errorMsg : data.error_msg});

            }

        } catch (error) {

           console.log(error);

        }
        


    }


    return(
        <div className='login-cont'>

            <form className="form-cont" onSubmit={onSubmitUserData}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Username</label>
                    <input onChange={(e)=>{setValuse({...allValus,username : e.target.value})}} type="text" className="form-control border-primary" id="exampleInputEmail" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share yourusername with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={(e)=>{setValuse({...allValus,password : e.target.value})}} type="Password" className="form-control border-primary" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <br />
            <p className='text-danger'>{allValus.errorMsg}</p>

        </div>
    )
}






export default Login;