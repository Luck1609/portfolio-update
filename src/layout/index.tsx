import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

export default function Layout() {

  return (
    <div className="grid lg:grid-cols-6">
      <Sidenav />

      <main className="w-full lg:col-span-5">
        <Outlet />
      </main>
    </div>
  );
}
