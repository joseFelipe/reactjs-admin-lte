import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    console.log("handlechange " + event);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    console.log("Form submited: " + email);
    console.log("Form submited: " + password);

    if (email === "felipe.florianopolis@gmail.com" && password === "1234") {
      console.log("logado");
    } else {
      console.log("nao logado");
    }
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="fake_url">
              <b>Alternative</b>Sistemas
            </a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Senha"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Lembrar senha</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block btn-flat"
                      value="Entrar"
                    />
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OU -</p>
                <a href="fake_url" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Entrar com Facebook
                </a>
                <a href="fake_url" className="btn btn-block btn-danger">
                  <i className="fab fa-google mr-2" /> Entrar com Google
                </a>
              </div>
              <p className="mb-1">
                <a href="fake_url">Esqueci minha senha</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Criar conta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
