export function Header(props) {
  return (
    <header className="window-header">
      <div className="header-icons">
        <div className="item close"></div>
        <div className="item min"></div>
        <div className="item max"></div>
      </div>
      <div className="title">{props.title}</div>
    </header>
  );
}