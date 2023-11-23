import { lazy } from "react";
import Loading from "./Common/Loading";
const Header = lazy(() => import("./Header/Header"));
const Draft = lazy(() => import("./Draft/Draft"));

export { Header,Draft,Loading };
