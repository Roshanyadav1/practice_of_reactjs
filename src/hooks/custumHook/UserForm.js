import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindFirstName , resetFirstName] =  useInput('')
  const [lastName , bindLastName , resetLastName] =  useInput('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName} `)
    resetFirstName()
    resetLastName()
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input
            {...bindFirstName}
            value={firstName}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            {...bindLastName}
            value={lastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
