import React from "react";
import styled from "styled-components";
import axios from 'axios'
const FormWrapper = styled.div`
  width: 400px;
  padding: 1rem;
  margin: 4rem auto;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  @media (max-width: 500px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input,
    button {
      padding: 0.5rem 1rem;
      margin: 0.5rem auto;
      outline: none;
      border-radius: 6px;
      width: 80%;
      border: 1px solid #ccc;
      font-size: 1.3rem;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
    button {
      cursor: pointer;
      font-weight: 400;
      &:hover {
        background-color: #ccc;
        color: white;
      }
    }
  }
`;

const initialState = {
  form: {
    name: "",
    bio: ""
  },
  isUpdating: false
};
const apiUrl = "http://localhost:3000/api/users";
class AddNewUser extends React.Component {
  state = {
    ...initialState,
    error: null
  };

  inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };
  submitHandler = e => {

  e.preventDefault();
  const { name, bio } = this.state.form;
   if (name && bio) {
     axios.post(apiUrl, { name, bio}).
     then(res => {
       if(res.data) {
         this.props.history.push('/')
       }
     })
   }
  };
  render() {
    return (
      <FormWrapper>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            onChange={this.inputChangeHandler}
            placeholder="Name"
            value={this.state.form.name}
          />
          <input
            type="text"
            name="bio"
            onChange={this.inputChangeHandler}
            placeholder="Bio"
            value={this.state.form.bio}
          />
          <button>Add User</button>
        </form>
      </FormWrapper>
    );
  }
}

export default AddNewUser;
