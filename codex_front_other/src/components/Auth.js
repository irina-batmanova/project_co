import React from 'react';
import authUser from '../fetchApi/authApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    this.props.loginUser();
    console.log(this.props);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.login} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password}
          onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser: authUser
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm );
