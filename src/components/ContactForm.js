import { useState } from "react";

export default function UserForm({ addContact }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    checkbox: "",
  });

  const interestChecklist = ["React", "VueJS", "Angular", "Laravel"];

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    console.log(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "", checkbox: "" });
  };

  return (
    <div className="form-container py-2 px-36">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3 mb-6 md:grid-cols-1">
          <div>
            <label
              for="name"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-black items-start"
            >
              First name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              value={contactInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1234556789"
              pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
              value={contactInfo.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            value={contactInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Interersted Tech
          </label>
          <div className="flex bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div className="flex">
              {interestChecklist.map((checklist) => (
                <div>
                  <input
                    id="inline-checked-checkbox"
                    type="checkbox"
                    value={checklist}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-disabled-checkbox"
                    className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500 mr-3"
                  >
                    {checklist}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              onChange={handleChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
