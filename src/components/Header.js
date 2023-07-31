import headerStyles from "../styles/Header.module.css";
export default function Header(props) {
  return (
    <header className={headerStyles.logo}>
      <img
        src="/images/logo-croppan.png"
        className="App-logo"
        alt="jelly"
        width={140}
        height={90}
      />
    </header>
  );
}
