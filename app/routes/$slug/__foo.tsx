import { Outlet } from "@remix-run/react";

export default function FooLayout() {
  return (
    <div>
      <h1>Layout: foo</h1>
      <Outlet/>
    </div>
  )
}