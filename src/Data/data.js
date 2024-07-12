import { useLocation } from "react-router-dom";
import person from "../assets/person.svg";
import client from "../assets/client.svg";
import connect from "../assets/connect.svg";
import mailBox from "../assets/mailBox.svg";
import bubble from "../assets/bubble.svg";
import save from "../assets/save.svg";

// drawer data
export const drawerData = {
  home: [["dashboard", "dashboard"]], // inside array second value determine the path
  resource: [
    ["add resource", "addresource"],
    ["view resource", "viewresource"],
    ["resource track", "resourceTrack"],
    ["buffer resource", "buffer"],
    ["location details", "locationDetails"],
    ["allocation track", "allocationTrack"],
  ],
  report: [
    ["JL report", "jlReport"],
    ["track report", "trackReport"],
    ["app report", "appReport"],
    ["complete report", "completeReport"],
    ["forecast vs actual allocation", "forecastActual"],
  ],
};

// Menu determination
export const MenuPath = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const menuPathDetermine =
    pathname === "/" ||
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/password";
  return menuPathDetermine;
};

//  dashboard card details
export const cardDashboard = [
  {
    icon: person,
    title: "total resource",
    no: "96",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: client,
    title: "total offshare",
    no: "3,650",
    color: "#f97316",
    bg: "#fff7ed",
  },
  {
    icon: mailBox,
    title: "taotal onsite",
    no: "356",
    color: "rgb(73, 190, 255)",
    bg: "#e0f2fe",
  },
  {
    icon: save,
    title: "total buffer",
    no: "26",
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    icon: bubble,
    title: "total new oder",
    no: "96",
    color: "#10b981",
    bg: "#ecfdf5",
  },
  {
    icon: connect,
    title: "total",
    no: "1,244",
    color: "#2563eb",
    bg: "#eff6ff",
  },
];

// Table data for dashboard
export const dashboardTable = {
  head: [
    "apps",
    "run",
    "run cnx",
    "run ent",
    "oth",
    "cnx",
    "ext",
    "mnt",
    "mnt cnx",
    "cnx",
  ],
  rows: [
    ["bss", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
    ["akana", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
    ["beehive", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
    ["cnx", "1", "1", "1", "1", "1", "1", "1", "1", "1",],
    ["channels", "1", "1", "1", "1", "1", "1", "1", "1", "1",],
    ["cto-con", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
    ["kenan", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
    ["pmo", "1", "1", "1", "1", "1", "1", "1", "1", "1", ],
  ],
  collapse: [
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
    ["xx","xx","xx","xx","xx","xx","xx","xx","xx", ],
  ],
};
