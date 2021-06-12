import Avatar from "./components/Avatar";
import Card from "./components/Card";
import contacts from "./contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App(props) {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img={
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/130247728_1282555262109266_6744599593313174577_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Is2Th_-vBUQAX9xWm7t&_nc_ht=scontent-ssn1-1.xx&oh=93332bbe6a255c3f1c2e3fc28bfa0f9b&oe=60C86FAC"
        }
      />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
