import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./Lab.css";

function App() {
	return (
		<>
			<div className="container">
				<Router>
					<Navbar />
					<Routes>
						<Route
							exact
							path="/add-form"
							element={<Dashboard />}
						></Route>
						<Route exact path="/" element={<Home />}></Route>
						<Route path="/about-us" element={<About />}></Route>
						<Route path="/contact-us" element={<Contact />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/login" element={<Login />}></Route>
					</Routes>
					<Footer />
				</Router>
				<ToastContainer />
			</div>
		</>
	);
}

export default App;
