import React, { Component } from "react";
import User from "./user";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Users extends Component {
  state = {
    isLoading: true,
    users: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);

    setTimeout(() => {
      const users = data.map(
        ({ id, name, email, address: { city }, phone, website }) => ({
          id,
          name,
          email,
          city,
          phone,
          website,
        })
      );
      this.setState({ isLoading: false, users });
    }, 2000);
  }

  handleEdit(){
    
  }

  handleDelete = (selectedUser) =>{
    const users = this.state.users.filter((user) => user !== selectedUser);
    this.setState({users})
  }

  render() {
    const { isLoading, users } = this.state;
    console.log(this.state);

    if (isLoading)
      return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      );

    return (
      <div className="container">
        <h1 className="text-center mt-5 mb-3">Users List </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user.id} user={user} onEdit={this.handleEdit} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
