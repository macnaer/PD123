import React from "react";

const GetCategoryCount = (List, categoryName) => {
  return List.filter((el) =>
    el.category.toLowerCase().includes(categoryName.toLowerCase())
  );
};

const Sidebar = ({ List }) => {
  const workCategory = GetCategoryCount(List, "Work");
  const familyCategory = GetCategoryCount(List, "Family");
  const privateCategory = GetCategoryCount(List, "Private");
  const friendCategory = GetCategoryCount(List, "Friend");
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>{List.length}</span>
        </div>
        <div className="list">
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>{workCategory.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>{familyCategory.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>{privateCategory.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>{friendCategory.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
