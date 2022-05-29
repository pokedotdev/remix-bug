import { Outlet } from "@remix-run/react";

export default function BarLayout() {
  return (
    <div>
      <h1>Layout: bar</h1>
      <Outlet/>
    </div>
  )
}