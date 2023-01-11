// Components
import Sidebar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";

function App() {
  return (
    <>
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <Sidebar />
          <ContactList />
        </div>
      </div>
    </>
  );
}

export default App;
