const Title = () => {
    return (
      <a href="/">
        <img
          alt="logo"
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFVXe2Tg6hViwCnFCKGZcfsFyM7TKOCNQKQ&s"
        ></img>
      </a>
    );
  };
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li >Home</li>
            <li >About</li>
            <li >Contact</li>
            <li >Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;