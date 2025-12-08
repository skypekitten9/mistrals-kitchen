import "./header.css";
import ChefLogo from "../../../public/chef.svg";

export function Header() {
  return (
    <header>
      <h1 className="page-title">Mistral's</h1>
      <img  src={ChefLogo} alt="chef logo"></img>
      <h1 className="page-title">Kitchen</h1>
    </header>
  );
}
