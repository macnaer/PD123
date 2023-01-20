import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Router } from "react-router-dom";
// Components
import Sidebar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";

import AddContact from "./components/addContact/addContact";
import Header from "./components/header/header";
import EditContact from "./components/editContact/editContact";
class App extends React.Component {
  state = {
    contactList: [
      {
        id: uuidv4(),
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "example@gmail.com",
        avatar: 54,
        gender: "men",
        category: "Work",
      },
      {
        id: uuidv4(),
        name: "Emma Vatson",
        phone: "+9-456-600-9898",
        email: "emma@gmail.com",
        avatar: 50,
        gender: "women",
        category: "Family",
      },
      {
        id: uuidv4(),
        name: "Bill Vatson",
        phone: "+9-456-600-1234",
        email: "bill@gmail.com",
        avatar: 44,
        gender: "men",
        category: "Family",
      },
    ],
    selectedContact: null,
  };

  onDelete = (id) => {
    const { contactList } = this.state;
    const index = contactList.findIndex((i) => i.id === id);
    let tmpList = contactList.slice();
    const part1 = tmpList.slice(0, index);
    const part2 = tmpList.slice(index + 1);
    tmpList = [...part1, ...part2];

    this.setState({
      contactList: tmpList,
    });
  };

  onAddNewContact = (newContact) => {
    const { contactList } = this.state;
    const tmpList = contactList.slice();
    tmpList.unshift(newContact);

    this.setState({
      contactList: tmpList,
    });
  };

  onSelectContact = (id) => {
    const { contactList } = this.state;
    const index = contactList.findIndex((el) => el.id === id);
    const selectedContact = contactList[index];

    this.setState({
      selectedContact: selectedContact,
    });
  };

  onEditContact = (editedContact) => {
    const { contactList } = this.state;
    const index = contactList.findIndex((el) => el.id === editedContact.id);
    const tmpList = contactList.slice();
    tmpList[index] = editedContact;

    this.setState({
      contactList: tmpList,
    });
  };

  render() {
    const { contactList, selectedContact } = this.state;

    return (
      <>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <Sidebar List={contactList} />
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="contacts-list">
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ContactList
                        onDelete={this.onDelete}
                        onSelectContact={this.onSelectContact}
                        List={contactList}
                      />
                    }
                  />
                  <Route
                    path="/add-contact"
                    element={
                      <AddContact onAddNewContact={this.onAddNewContact} />
                    }
                  />
                  <Route
                    path="/edit-contact"
                    element={
                      <EditContact
                        onEditContact={this.onEditContact}
                        selectedContact={selectedContact}
                      />
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
