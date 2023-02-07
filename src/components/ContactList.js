export default function ContactList({contacts}) {
  return (
    <div className="gird justify-items-center">
    <table className="border borw-4 h-4 bg-gray-100 border-gray-300 rounded my-3">
    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">First Name</th>
    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</th>
    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contact</th>
    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Subject</th>
      {contacts.map((contact) => (
        <tr className="border-2">
        <div>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.phonenumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.checkbox}</td>
          </div>
        </tr>
      ))}
      </table>
    </div>
  );
}
