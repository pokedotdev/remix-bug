import { Outlet } from "@remix-run/react";

export default function SlugRoute() {
  return (
    <div>
      <h1>Layout: slug</h1>
      <Outlet/>
    </div>
  )
}