import { FC, PropsWithChildren } from "react";
import { MainMenu } from "./MainMenu";
import { AdminPanel } from "./AdminPanel";


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <div className="menu"><MainMenu /></div>
      <div className="body">{children}</div>
      <AdminPanel />
    </div>
  );
};
