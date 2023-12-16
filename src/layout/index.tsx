import useSWR from "swr";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
// import Helper from "@/helpers";

// const { api } = Helper;

export default function Layout() {
  const { data: user } = useSWR("/auth/me");
  // console.log("Auth user info =>", user);

  return (
    <div className="grid lg:grid-cols-6">
      <Sidenav user={user} />

      <main className="w-full lg:col-span-5">
        <Outlet context={user} />
      </main>
    </div>
  );
}
