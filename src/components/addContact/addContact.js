import React, { useState } from "react";

const AddContact = () => {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+xx(xxx)xx-xx-xxx");

  const onGetName = (event) => {
    setName(event.target.value);
  };

  const onGetPhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-7">
        <h2>Add new contact</h2>
        <form>
          <div className="mb-3">
            <div className="form-label">Name</div>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={onGetName}
            />
          </div>
          <div className="mb-3">
            <div className="form-label">Phone</div>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={onGetPhone}
            />
          </div>
        </form>
      </div>
      <div className="col-5">User info</div>
    </div>
  );
};

export default AddContact;
