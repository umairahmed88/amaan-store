import { useState } from "react";

const AddListing = () => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		price: "",
		description: "",
		inventory: "",
		images: null,
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: files ? files[0] : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full max-w-2xl bg-white p-8 shadow mx-auto'
			style={{ border: "none", margin: 0 }}
		>
			<h2 className='text-2xl font-bold mb-6 text-center'>Add Product</h2>

			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='name'
				>
					Product Name
				</label>
				<input
					className='appearance-none border-b border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
					id='name'
					name='name'
					type='text'
					value={formData.name}
					onChange={handleChange}
					placeholder='Enter product name'
					required
				/>
			</div>

			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='category'
				>
					Category
				</label>
				<div className='relative'>
					<select
						className='appearance-none border-b border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
						id='category'
						name='category'
						value={formData.category}
						onChange={handleChange}
						required
					>
						<option value=''>Select Category</option>
						<option value='electronics'>Electronics</option>
						<option value='fashion'>Fashion</option>
						<option value='grocery'>Grocery</option>
						<option value='home'>Home</option>
						<option value='books'>Books</option>
						<option value='beauty'>Beauty</option>
						<option value='sports'>Sports</option>
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
						<svg
							className='h-5 w-5 text-gray-400'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='price'
				>
					Price ($)
				</label>
				<input
					className='appearance-none border-b border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
					id='price'
					name='price'
					type='number'
					step='0.01'
					min='0'
					value={formData.price}
					onChange={handleChange}
					placeholder='Enter price'
					required
				/>
			</div>

			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='inventory'
				>
					Inventory Quantity
				</label>
				<input
					className='appearance-none border-b border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
					id='inventory'
					name='inventory'
					type='number'
					min='0'
					value={formData.inventory}
					onChange={handleChange}
					placeholder='Enter inventory count'
					required
				/>
			</div>

			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='description'
				>
					Description
				</label>
				<textarea
					className='appearance-none border-b border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
					id='description'
					name='description'
					type='text'
					value={formData.description}
					onChange={handleChange}
					placeholder='Enter Description'
					required
				/>
			</div>

			<div className='mb-10'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='images'
				>
					Upload Images
				</label>
				<input
					className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-700'
					id='images'
					name='images'
					type='file'
					onChange={handleChange}
					accept='image/*'
				/>
			</div>

			<div className='flex justify-center mt-16'>
				<button
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Add Product
				</button>
			</div>
		</form>
	);
};

export default AddListing;
