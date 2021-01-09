import "./style.scss";

const Header = () => {
  const renderer = () => {
    return (
      <div className="header-box">
        <h1 className="display-5">Giphy Images</h1>
      </div>
    );
  };
  return renderer();
};

export default Header;
