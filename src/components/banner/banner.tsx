import type { PropsWithChildren } from "react";
import "./banner.css";

export type TBanner = {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Banner({
  children,
  title,
  description,
  className,
  ...rest
}: PropsWithChildren<TBanner>) {
  return (
    <div className={`bannerRoot ${className}`} {...rest}>
      <div className="bannerTextContainer">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
