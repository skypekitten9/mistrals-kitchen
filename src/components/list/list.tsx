import "../text.css";
import "./list.css";
import deleteSvg from "../../assets/delete.svg";

type TList = {
  title: string;
  items: string[];
  onItemDeleted: (item: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function List({ title, items, onItemDeleted, ...rest }: TList) {
  const listItemElements = items.map((item) => (
    <li className="list-item">
      {item}
      <button onClick={() => onItemDeleted(item)} className="remove-button">
        <img src={deleteSvg} />
      </button>
    </li>
  ));
  return (
    <div className="text-container" {...rest}>
      <h2 className="text-title">{title}</h2>
      <ul>{...listItemElements}</ul>
    </div>
  );
}
