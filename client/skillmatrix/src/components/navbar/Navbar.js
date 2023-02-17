import React from "react";
function TopNavbar() {
  return (
    <div className="navbar">
      <input class="form-control mr-sm-2  search-box" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
    </div>
  )
};
export default TopNavbar();