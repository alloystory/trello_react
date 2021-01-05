function Header(props) {
  return (
    <header>
      <div className="left">
        <h1 className="header__title">Board Title</h1>
        <button>Boards</button>
      </div>
      <div className="right">
        <input type="text" className="header__search" />
        <button>Logout</button>
      </div>
    </header>
  );
}

export default Header;
