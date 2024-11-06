import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { AddListing, Header, Home, ImageList, Sidebar } from ".";

const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/image-list", element: <ImageList /> },
	{ path: "/add-listing", element: <AddListing /> },
];

const App = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<Router>
			<Header toggleSidebar={toggleSidebar} />
			<div
				className={`flex transition-all duration-300 ${
					sidebarOpen ? "lg:ml-32" : "ml-0"
				} pt-16 md:pt-24`}
			>
				<Sidebar sidebarOpen={sidebarOpen} />
				<div className='flex-1'>
					<Routes>
						{routes.map((route) => (
							<Route
								path={route.path}
								key={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
