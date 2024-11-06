import { useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbAirBalloon } from "react-icons/tb";
import { BsBucket } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbArrowBearRight2 } from "react-icons/tb";

const Sidebar = ({ sidebarOpen }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const menuItems = [
		{ icon: MdOutlineSpaceDashboard, label: "Dashboards" },
		{ icon: SlScreenDesktop, label: "Pages" },
		{ icon: TbAirBalloon, label: "Applications" },
		{ icon: HiOutlineBuildingOffice, label: "UI" },
		{ icon: TbArrowBearRight2, label: "Menu" },
		{ icon: BsBucket, label: "Blank Page" },
		{ icon: SlDocs, label: "Docs" },
	];

	return (
		<div
			className={`fixed top-22 shadow-2xl bg-white py-2 left-0 h-full text-sm w-32 rounded-r-xl
				${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
				transition-transform duration-300 ease-in-out z-50 shadow-xl`}
			style={{ fontFamily: "'Roboto', sans-serif" }}
		>
			<div className='p-4'>
				<ul className='space-y-2'>
					{menuItems.map((item, index) => {
						const Icon = item.icon;
						const isActive = activeIndex === index;

						return (
							<li
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`menuItem flex-col py-6 flex items-center cursor-pointer border-b border-gray-300 relative last:border-0
									${
										isActive
											? "text-[#AA336A] before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-[#AA336A] before:rounded-full"
											: "text-[#404040]"
									}
								`}
								style={{ fontWeight: 300 }}
							>
								<Icon size={32} />
								<p className='py-1' style={{ fontWeight: 300 }}>
									{item.label}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
