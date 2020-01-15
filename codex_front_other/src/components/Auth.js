import React from 'react';
import authUser from '../fetchApi/authApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Alert} from 'react-bootstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log("handling change");
    const value = event.target.value;
    console.log(value);
    console.log(this.state);
    console.log(event.target.name);
    this.setState({
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    console.log("user and passwd", this.state.login, this.state.password);
    this.props.loginUser(this.state.login, this.state.password);
    console.log(this.props);
    event.preventDefault();
  }

  render() {
    console.log("trying to render auth");
  
    const {user, error} = this.props;
    if (user !== undefined) {
      return (<div>You're a user {user}</div>)
    }
    console.log("our error is ", error);
    if (error !== undefined) {
      console.log("we have an error");
      // this.setState({ error: undefined });
      // this.setState({ user: undefined });
      return (<Alert>Wrong credentials</Alert>)
    }
    return (
    <form onSubmit={this.handleSubmit}>
      return (
        <label>
          Email:
          <input type="text" value={this.state.login}
          name="login" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password}
          name="password"
          onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user, 
  error: state.auth.error
})
// function mapStateToProps(state) {
//   console.log("map state to props", state);
// }
const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser: authUser
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm );
