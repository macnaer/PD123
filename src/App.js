// Components
import Sidebar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";
import React from "react";

class App extends React.Component {
  state = {
    contactList: [
      {
        id: 1,
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "example@gmail.com",
        category: "Friend",
      },
      {
        id: 2,
        name: "Emma Vatson",
        phone: "+9-456-600-9898",
        email: "emma@gmail.com",
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
            <Sidebar />
            <ContactList List={contactList} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
