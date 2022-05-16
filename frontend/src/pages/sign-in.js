import React, {useState} from 'react'
import $ from 'jquery'

const SignIn = () => {

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const display = document.querySelector('.error');

    async function onClickSignin () {
        var item={
            'username': username,
            'password': password
        };

        display.textContent = '';

        $.ajax({method:"post", url:"https://projekt-glz-frontend.herokuapp.com/users/login", data:item, header:{"Content-Type":'application/x-www-form-urlencoded'}, success:function(data){
            window.location.replace("/");
        }, error:function (data){
            if (data.status === 401) {
                return display.textContent = "Wrong username and password!";
            }
        }});
    }

    return (
        <div>
            <h1>Sign-in</h1>
            <div className="error" style={{color: "red", display: "inline-block"}}></div><br/>
            <label>Username:</label><br/>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
            <label>Password:</label><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button onClick={onClickSignin}>Sign-in</button>
        </div>
    )
}

export default SignIn