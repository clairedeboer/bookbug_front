import React from "react";

const ListNav = ({ onDisplayList }) => {
  return (
    <div className="ui vertical menu" id="list-nav">
      <a
        className="active item"
        onClick={(event) => onDisplayList("Want to Read")}
      >
        Want to Read
      </a>
      <a className="item" onClick={(event) => onDisplayList("Reading")}>
        Reading
      </a>
      <a className="item" onClick={(event) => onDisplayList("Completed")}>
        Completed
      </a>
    </div>
  );
};

export default ListNav;
