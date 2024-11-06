import { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineFullscreen } from "react-icons/ai";

const Header = ({ toggleSidebar }) => {
	const [showSearchInput, setShowSearchInput] = useState(false);

	const IconWrapper = ({ Icon, size }) => (
		<Icon
			size={size}
			style={{ color: "#808080", transition: "color 0.3s" }}
			onMouseEnter={(e) => (e.currentTarget.style.color = "#AA336A")}
			onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
		/>
	);

	return (
		<div className='fixed top-0 left-0 w-full z-50 p-4 md:p-6 lg:p-8 shadow-sm border-b flex items-center justify-between bg-white'>
			{showSearchInput ? (
				<div className='flex items-center w-full rounded-full py-2 px-3'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none text-sm w-full bg-transparent'
					/>
					<GoSearch
						size={24}
						className='text-gray-400 cursor-pointer'
						onClick={() => setShowSearchInput(false)}
					/>
				</div>
			) : (
				<>
					<div className='flex gap-3 md:gap-5 lg:gap-6 items-center'>
						<TfiMenuAlt
							size={24}
							onClick={toggleSidebar}
							className='cursor-pointer text-lg md:text-xl lg:text-2xl'
						/>
						<GoSearch
							size={24}
							className='text-gray-400 cursor-pointer md:hidden'
							onClick={() => setShowSearchInput(true)}
						/>
						<div className='hidden md:flex items-center rounded-full py-2 px-3 bg-gray-100'>
							<input
								type='text'
								placeholder='Search'
								className='outline-none text-xs md:text-sm bg-transparent md:bg-gray-100 w-28 md:w-32 lg:w-40'
							/>
							<GoSearch size={18} className='text-gray-400' />
						</div>
						<p className='bg-gray-100 rounded-full py-2 px-3 text-xs md:text-sm text-gray-500'>
							EN
						</p>
						<button className='bg-gray-100 rounded-full py-2 px-3 text-xs md:text-sm text-gray-500 border border-[#AA336A] hover:bg-[#AA336A] hover:text-white'>
							BUY
						</button>
					</div>
					<Link
						to={"/"}
						className='font-semibold text-lg md:text-xl lg:text-2xl'
					>
						Amaan Store
					</Link>
					<ul className='flex gap-3 md:gap-4 items-center'>
						<li>
							<IconWrapper Icon={IoMoonOutline} size={22} />
						</li>
						<li>
							<IconWrapper Icon={MdOutlineSettings} size={22} />
						</li>
						<li>
							<IconWrapper Icon={PiCirclesFourLight} size={22} />
						</li>
						<li>
							<IconWrapper Icon={IoMdNotificationsOutline} size={22} />
						</li>
						<li>
							<IconWrapper Icon={AiOutlineFullscreen} size={22} />
						</li>
						<p className='hidden lg:block text-xs'>Umair</p>
						<li className='flex gap-2 justify-between items-center'>
							<img
								src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
								alt='profile image'
								className='h-8 w-8 rounded-full'
							/>
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Header;
