import React from "react";




function Menu({darkMode, setDarkMode}) {
  function handleDarkMode() { 
    setDarkMode(!darkMode);
  }

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={() => handleDarkMode()}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
