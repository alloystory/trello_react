function Header(props) {
  return (
    <div className="header">
      <div className="header--section">
        <h1 className="header--section-item text-heading">Board Title</h1>
        <button className="header--section-item btn">Boards</button>
      </div>
      <div className="header--section">
        <input
          type="text"
          className="header--section-item header--search"
          placeholder="Search..."
        />
        <button className="header--section-item btn">Logout</button>
      </div>
    </div>
  );
}

export default Header;
