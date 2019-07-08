import React from "react";
import styled from "styled-components";
import User from "./User";
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/users'
const UsersContainer = styled.section`
  width: 800px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const UsersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
class Users extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    this.getUsers()
  }
  getUsers = () => {
    axios.get(BASE_URL).then(res => {
      this.setState({users : res.data.users})
    }).catch(err => {
      console.log(err)
    })
  }
  deleteUser = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
    .then(({data}) => {
      if (data.status === 'success') {
        alert('User deleted successfully')
        this.getUsers()
      }
    })
  }
  render() {
    return (
      <React.Fragment>
      <UsersContainer>
        <UsersWrapper>
          {this.state.users &&
            this.state.users.map(user => (
              <User
                key={user.id}
                user={user}
                deleteUser={this.deleteUser}
              />
            ))}
        </UsersWrapper>
      </UsersContainer>
      </React.Fragment>
    );
  }
}

export default Users


