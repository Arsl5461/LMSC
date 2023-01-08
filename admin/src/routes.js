/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import CreateTest from "views/CreateTest.js";
import TableList from "views/TableList.js";
import ContactList from "views/ContactList";
import Setting from "views/Setting";
import Bookings from "./views/Bookings";

import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "nc-icon nc-chart-pie-35",
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/user",
		name: "User Profile",
		icon: "nc-icon nc-circle-09",
		component: UserProfile,
		layout: "/admin",
	},
	{
		path: "/table",
		name: "Registered Users",
		icon: "nc-icon nc-notes",
		component: TableList,
		layout: "/admin",
	},
	{
		path: "/create/test",
		name: "Create Tests",
		icon: "nc-icon nc-notes",
		component: CreateTest,
		layout: "/admin",
	},
	{
		path: "/test/bookings",
		name: "Bookings",
		icon: "nc-icon nc-notes",
		component: Bookings,
		layout: "/admin",
	},

	{
		path: "/contactlist",
		name: "Contact List",
		icon: "nc-icon nc-notes",
		component: ContactList,
		layout: "/admin",
	},

	{
		path: "/setting",
		name: "Settings",
		icon: "nc-icon nc-notes",
		component: Setting,
		layout: "/admin",
	},
	// {
	//   path: "/typography",
	//   name: "Typography",
	//   icon: "nc-icon nc-paper-2",
	//   component: Typography,
	//   layout: "/admin"
	// },
	// {
	//   path: "/icons",
	//   name: "Icons",
	//   icon: "nc-icon nc-atom",
	//   component: Icons,
	//   layout: "/admin"
	// },
	// {
	//   path: "/notifications",
	//   name: "Notifications",
	//   icon: "nc-icon nc-bell-55",
	//   component: Notifications,
	//   layout: "/admin"
	// }
];

export default dashboardRoutes;
