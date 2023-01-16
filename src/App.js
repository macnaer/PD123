// Components
import Sidebar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import AddContact from "./components/addContact/addContact";
import Header from "./components/header/header";
class App extends React.Component {
  state = {
    contactList: [
      {
        id: 1,
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "example@gmail.com",
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        category: "Work",
      },
      {
        id: 2,
        name: "Emma Vatson",
        phone: "+9-456-600-9898",
        email: "emma@gmail.com",
        avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        category: "Family",
      },
    ],
  };

  render() {
    const { contactList } = this.state;

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
                    element={<ContactList List={contactList} />}
                  />
                  <Route path="/add-contact" element={<AddContact />} />
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
