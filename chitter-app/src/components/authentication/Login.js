import React from 'react'
import axios from 'axios'


class Login extends React.Component {

  state = {
    handle: "",
    password: "",
  }

  handleChange = event => {
    this.setState({handle: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
      event.preventDefault()

      axios.post(
        'https://chitter-backend-api.herokuapp.com/sessions',
        {"session": {"handle":this.state.handle, "password":this.state.password}}
      )
      .then(res => {
        console.log("log in success")
        sessionStorage.setItem('user_id', res.data.user_id)
        sessionStorage.setItem('session_key', res.data.session_key)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="handle"
            placeholder="Handle"
            value={this.state.handle}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        <button type="submit">Login</button>
        </form>
      </div>    )
  }
}

export default Login;
