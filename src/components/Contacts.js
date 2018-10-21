import React, { Component } from "react";
import  Contact  from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwilliams@gmail.com",
          phone: "777-555-555"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "henry@gmail.com",
          phone: "666-555-555"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return <div>{contacts.map(contact)=> {
      <Contact key={contact.id} contact={ contact }/>>
    }}</div>;
  }
}

export default Contacts;
