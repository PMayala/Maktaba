import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Stats from "../views/Stats";
import Books from "../views/Books";
import Members from "../views/Members";
import Issues from "../views/Issues";

export default function AuthRoute() {
  const AuthenticatedRoutes = () => (
    <Routes>
      <Route path="stats" element={<Stats />} />
      <Route path="books" element={<Books />} />
      <Route path="members" element={<Members />} />
      <Route path="issues" element={<Issues />} />
    </Routes>
  );
  return <Dashboard>{AuthenticatedRoutes()}</Dashboard>;
}
