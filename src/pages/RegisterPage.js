import React, { useState } from "react";
import "../App.css";


const LoginPage = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const registerUser = async (e) => {
        e.preventDefault();
        const response = await fetch("https://django-react-shop-api.herokuapp.com/api/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              username: username,
            }),
          }
        );
        let data = await response.json();
        console.log(data);
        console.log(response);
        if (response.status === 201) {
            window.location.replace("/login");
        } else {
            alert("Incorrect Data Supplied");
        }

  }

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="card">
                <div className="text-center"></div>
                <div className="card-body">
                  <h3 className="h3 text-center">CREATE ACCOUNT</h3>
                  <hr />
                  <div className="m-sm-4">
                    <form onSubmit={registerUser}>
                      <div className="mb-1">
                        <label className="form-label">EMAIL</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Type Your Email here.."
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-1">
                        <label className="form-label">USERNAME</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Type Your Username here.."
                          onChange={(e) => setUsername(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-block btn-primary"
                        >
                          REGISTER
                        </button>
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
};

export default LoginPage;
