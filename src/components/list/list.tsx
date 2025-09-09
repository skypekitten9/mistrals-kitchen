import "../text.css";
import "./list.css";

type TList = {
  title: string;
  items: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function List({ title, items, ...rest }: TList) {
  const listItemElements = items.map((item) => (
    <li className="list-item">
      {item}
      <button className="remove-button">🗑️</button>
    </li>
  ));
  return (
    <div className="text-container" {...rest}>
      <h2 className="text-title">{title}</h2>
      <ul>{...listItemElements}</ul>
    </div>
  );
}
