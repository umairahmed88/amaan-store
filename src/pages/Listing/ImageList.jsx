import { useState } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../../components/ImageListing/ImageCard";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineBars } from "react-icons/ai";
import { PiSquaresFourThin } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import items from "../../data/data";
import Modal from "../../components/Modal/Modal";
import AddListing from "./AddListing";

const ImageList = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [selectedOption, setSelectedOption] = useState("Product Name");
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const [displayOptionsVisible, setDisplayOptionsVisible] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleDropdown = (dropdown) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setActiveDropdown(null);
	};

	const handleItemsPerPageClick = (number) => {
		setItemsPerPage(number);
		setActiveDropdown(null);
	};

	const toggleDisplayOptions = () => {
		setDisplayOptionsVisible(!displayOptionsVisible);
	};

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const displayedItems = items.slice(0, itemsPerPage);

	return (
		<div className='bg-gray-100 shadow-inner min-h-screen p-4 lg:p-12'>
			<div className='flex justify-between items-center'>
				<header className='lg:mb-4 mb-2 flex flex-col lg:flex-row lg:items-center gap-4'>
					<h1 className='lg:text-3xl text-xl mb-2 text-gray-700'>Image List</h1>
					<nav className='flex space-x-4'>
						<Link to='/' className='hover:text-[#4B9E60] text-xs text-gray-700'>
							Home
						</Link>
						<Link
							to='/pages'
							className='hover:text-[#4B9E60] text-xs text-gray-700'
						>
							Pages
						</Link>
						<Link
							to='/product'
							className='hover:text-[#4B9E60] text-xs text-gray-700'
						>
							Product
						</Link>
						<Link
							to='/image-list'
							className='hover:text-[#4B9E60] text-xs text-gray-500'
						>
							Image List
						</Link>
					</nav>
				</header>
				<div className='mb-4 flex gap-1'>
					<button
						className='bg-[#4B9E60] text-white px-8 py-2 rounded-full hover:bg-[#4B9E60]'
						onClick={toggleModal}
					>
						Add Product
					</button>
					<button className='bg-[#4B9E60] text-white px-8 py-2 rounded-full hover:bg-[#4B9E60]'>
						Add
					</button>
				</div>
			</div>

			<div className='lg:hidden mb-2'>
				<button
					className='flex text-xs items-center'
					onClick={toggleDisplayOptions}
				>
					Display Options <MdArrowDropDown size={14} />
				</button>
			</div>

			<div
				className={`mt-2 flex-col gap-2 ${
					displayOptionsVisible ? "flex" : "hidden"
				} lg:flex lg:flex-row lg:justify-between lg:items-center`}
			>
				<div className='flex lg:flex-row flex-col lg:items-center gap-2'>
					<div className='flex text-2xl gap-2 text-[#4B9E60]'>
						<LiaBarsSolid />
						<AiOutlineBars />
						<PiSquaresFourThin />
					</div>
					<div className='flex gap-1'>
						<div className='relative'>
							<button
								className='hover:bg-[#4B9E60] text-gray-400 border border-gray-500 px-4 py-0.5 rounded-full text-xs hover:text-white flex items-center gap-0.5'
								onClick={() => handleDropdown("options")}
							>
								Order By: {selectedOption} <MdArrowDropDown size={20} />
							</button>

							{activeDropdown === "options" && (
								<div className='absolute bg-white border rounded-md shadow-md mt-2 w-48 z-20 text-sm text-gray-400'>
									<ul className='text-gray-700'>
										{["Product Name", "Category", "Status"].map((option) => (
											<li
												key={option}
												className='px-4 py-2 hover:bg-[#4B9E60] cursor-pointer text-sm hover:text-gray-100 text-gray-400'
												onClick={() => handleOptionClick(option)}
											>
												{option}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
						<div className='relative flex items-center w-48'>
							<input
								type='text'
								className='rounded-full px-4 pr-10 text-gray-400 border border-gray-500 w-full bg-transparent'
								placeholder='Search'
							/>
							<GoSearch className='absolute right-3 text-gray-400' />
						</div>
					</div>
				</div>
				<div className='ml-4 relative flex gap-2 items-center'>
					<p className='text-sm text-gray-400'>
						0 - {itemsPerPage} of {items.length}
					</p>
					<div className='relative'>
						<button
							className='text-sm border hover:bg-[#4B9E60] hover:text-white border-gray-400 rounded-full px-2 py-0.5 bg-white text-gray-700 focus:outline-none flex items-center'
							onClick={() => handleDropdown("itemsPerPage")}
						>
							{itemsPerPage} <MdArrowDropDown size={14} />
						</button>
						{activeDropdown === "itemsPerPage" && (
							<div className='absolute space-y-1 bg-white border rounded-md shadow-md mt-1 w-32 right-0 z-10 overflow-hidden'>
								<ul className='text-gray-400 text-sm'>
									{[4, 8, 12, 20].map((number) => (
										<li
											key={number}
											className='px-3 py-1 hover:bg-[#4B9E60] hover:text-white cursor-pointer'
											onClick={() => handleItemsPerPageClick(number)}
										>
											{number}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>

			<hr className='mt-4 mb-8' />
			<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6'>
				{displayedItems.map((item, index) => (
					<ImageCard
						key={index}
						title={item.title}
						price={item.price}
						category={item.category}
						inventory={item.inventory}
						description={item.description}
						imageUrl={item.imageUrl}
					/>
				))}
			</div>

			<Modal isVisible={isModalVisible} onClose={toggleModal}>
				<AddListing />
			</Modal>
		</div>
	);
};

export default ImageList;
