// layout.tsx
import Sidebar from "../../../components/sidebar";
import Header from "../../../components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-grow p-4 overflow-y-auto">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
