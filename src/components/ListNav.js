import React from "react"; 

const ListNav = ({ onDisplayList }) => {

  return (
    <div className="ui vertical menu">
      <button className="active item" onClick={(event) => onDisplayList('Want to Read')}>
      Want to Read
      </button>
      <button className="item" onClick={(event) => onDisplayList('Reading')}>
      Reading
      </button>
      <button className="item" onClick={(event) => onDisplayList('Completed')}>
      Completed
      </button>
    </div>
  )

}

export default ListNav;