/* eslint-disable react/prop-types */
const Modal = ({ isVisible, onClose, children }) => {
	if (!isVisible) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
			<div className='bg-white rounded-lg w-full max-w-lg p-6 relative shadow-lg'>
				<button
					className='absolute top-2 right-2 w-8 h-8 border border-red-600 text-red-600 rounded-full flex items-center justify-center text-lg hover:bg-red-600 hover:text-white transition-colors duration-200'
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
