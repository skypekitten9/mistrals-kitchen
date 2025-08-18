import "./header.css";
import ChefLogo from "../../assets/chef-claude.png";

export function Header() {
  return (
    <header>
      <img width={43} height={52} src={ChefLogo} alt="chef claude logo"></img>
      <h1 className="page-title">Chef Claude</h1>
    </header>
  );
}
