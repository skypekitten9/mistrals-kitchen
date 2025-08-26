import type { PropsWithChildren } from "react";
import "./banner.css";

export type TBanner = {
  title: string;
  description: string;
};

export function Banner({
  children,
  title,
  description,
}: PropsWithChildren<TBanner>) {
  return (
    <div className="bannerRoot">
      <div className="bannerTextContainer">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
