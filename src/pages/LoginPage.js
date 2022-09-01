import React, {useContext} from 'react'
import '../App.css'
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext);
    
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="card">
                <div className="text-center"></div>
                <div className="card-body">
                  <h3 className="h3 text-center">LOGIN</h3>
                  <hr />
                  <div className="m-sm-4">
                    <form onSubmit={loginUser}>
                      <div className="mb-1">
                        <label className="form-label">USERNAME</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Type Your Username here.."
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">PASSWORD</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-block btn-primary"
                        >
                          LOGIN
                        </button>
                      </div>
                      <div className="text-center mt-2">
                          <p>No Account ?...<a href='/register'>Register</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage