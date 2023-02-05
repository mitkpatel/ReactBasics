export default function ContactList({contacts}) {
  return (
    <div>
      {contacts.map((contact) => (
        <div className="justify-items-start">
          <div className="card" key={contact.phonenumber}>
            <p className="card-name">{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phonenumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}





