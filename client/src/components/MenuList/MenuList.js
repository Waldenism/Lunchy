import React from "react";

// RecipeList renders a bootstrap list item
export const MenuList = props => 
  <div className='list-overflow-container'> 
    <ul className="list-group">
      {props.children}
    </ul>
  </div>;
