const DashBoard = async () => {
	return (
		<div>
			<p className='font-semibold text-xl'>
				{/* {`Welcome back, ${capitalize(
          session?.user?.name?.split(' ')[0] ?? ''
        )}`} */}
			</p>
			<div className='w-[500px] bg-white rounded-lg shadow-lg p-4 mt-4'>
				<p className='font-semibold text-lg'>Your Profile</p>
				<p className='text-gray-600'></p>
			</div>
		</div>
	);
};

export default DashBoard;
