import React, {useState} from 'react'
import $ from 'jquery'

const Signup = () => {

    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    function onClickSignup () {
        let item={username, email, password}

        $.ajax({method:"post", url:"https://projekt-glz.herokuapp.com/users", data:item, header:{"Content-Type":'application/x-www-form-urlencoded'}, success:function(data){
            window.location.replace("/sign-in");
        }});
    }

    return (
        <div>
            <h1>Sign-up</h1>
            <label>Username:</label><br/>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
            <label>Email:</label><br/>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>Password:</label><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button onClick={onClickSignup}>Sign-Up</button>
        </div>
    )
}

export default Signup