/* eslint-disable react/prop-types */
const ImageCard = ({
	title,
	price,
	category,
	inventory,
	description,
	imageUrl,
}) => {
	return (
		<div className='w-full h-96 rounded-lg bg-white shadow-md flex flex-col justify-between transition-all duration-300'>
			<img
				src={imageUrl}
				alt={title}
				className='w-full h-56 object-cover rounded-t-lg'
			/>
			<div className='flex-1 p-4 overflow-hidden'>
				<h5 className='text-sm'>{title}</h5>
				<h5 className='text-sm'>Price: {price}</h5>
				<h5 className='text-sm'>Category: {category}</h5>
				<p>{inventory}</p>
				<p className='text-sm text-gray-600 mt-3 line-clamp-2'>{description}</p>
			</div>
		</div>
	);
};

export default ImageCard;
