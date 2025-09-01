import "./list.css";

type TList = {
  title: string;
  items: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function List({ title, items, ...rest }: TList) {
  const listItemElements = items.map((item) => (
    <li className="listItem">{item}</li>
  ));
  return (
    <div className="listContainer" {...rest}>
      <h2 className="listTitle">{title}</h2>
      <ul>{...listItemElements}</ul>
    </div>
  );
}
