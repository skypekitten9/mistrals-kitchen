import ReactMarkdown from "react-markdown";
import "./markdown.css";

export function Markdown({ markdown }: { markdown: string }) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
