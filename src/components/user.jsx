import React, { Component } from "react";

export default class User extends Component {
  render() {
    const { user, onDelete, onEdit } = this.props;
    return (
      <tr>
        <th scope="row">{user.id}</th>
        <th scope="row">{user.name}</th>
        <th scope="row">{user.email}</th>
        <th scope="row">{user.city}</th>
        <th scope="row">{user.phone}</th>
        <th scope="row">{user.website}</th>
        <th>
          <button
            className="btn btn-secondary m-2"
            onClick={() => onEdit(user)}
          >
            edit
          </button>
          <button
            className="btn  btn-danger m-2"
            onClick={() => onDelete(user)}
          >
            X
          </button>
        </th>
      </tr>
    );
  }
}
