
const Login = () => {
    return (
        <div>
            <div className='register'>
          <div className='card'>
               <div className='card-header'>
          <h3>Login</h3>
               </div>

     <div className='card-body'>
          <form >
                

               <div className='form-group'>
                    <label htmlFor='email'>Email</label>
               <input type="email"  name="email"  className='form-control' placeholder='Email' id='email' /> 
               </div>

               <div className='form-group'>
                    <label htmlFor='password'>Password</label>
               <input type="password"  name="password"  className='form-control' placeholder='Password' id='password' /> 
               </div> 


                
          </form> 
     </div>


               </div> 

     </div>
        </div>
    );
};

export default Login;