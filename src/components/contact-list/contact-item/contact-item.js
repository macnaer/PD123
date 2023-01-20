import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const GetCategoryColor = (category) => {
  let categoryStyle = "lab lab-warning";
  switch (category) {
    case "Work":
      categoryStyle = "lab lab-success";
      break;
    case "Family":
      categoryStyle = "lab lab-primary";
      break;
    case "Private":
      categoryStyle = "lab lab-danger";
      break;
    default:
      categoryStyle = "lab lab-warning";
      break;
  }
  return categoryStyle;
};

const ContactItem = ({
  name,
  phone,
  email,
  category,
  avatar,
  gender,
  onDelete,
  onSelectContact,
}) => {
  let categoryStyle = GetCategoryColor(category);
  const URL = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img src={URL} alt="image" className="avatar" /> {name}
        </div>
        <div className={categoryStyle}>{category}</div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
      <div className="icons edit">
        <Link to="/edit-contact">
          <FontAwesomeIcon icon={faEdit} onClick={onSelectContact} size="2x" />
        </Link>
      </div>
      <div className="icons delete">
        <FontAwesomeIcon icon={faTrash} onClick={onDelete} size="2x" />
      </div>
    </div>
  );
};

export default ContactItem;
