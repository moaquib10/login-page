import React from 'react';


export default function App () {
  return (
    <div>
      <form>
        <h1>Create Account</h1>
        <div>
          <label>Email</label>
          <input type= 'text' name = 'email' placeholder= 'example@mail.com' />
        </div>
        <div>
          <label>Password</label>
          <input type= 'password' name = 'password' placeholder= 'choose secure password' />
        </div>
        <div>
          <label>Re-Enter New Password</label>
          <input type= 'password' name = 're-enter new password' placeholder= 'choose secure password' />
        </div>
        <div>
          <button type= 'button reset submit' name= 'login_button'>Create Account</button>
        </div>
      </form>
    </div>

  );
}

