const WelcomeMessage = () => {
	return (
		<div className='w-[843px] h-[66px] flex-col justify-start items-start gap-1 inline-flex'>
			<div className='self-stretch text-slate-900 text-3xl font-semibold leading-[38px]'>
				Welcome back, Stella
			</div>
			<div className='self-stretch text-slate-700 text-base font-normal leading-normal'>
				Track, manage and forecast your inventories here.
			</div>
		</div>
	);
};

export default WelcomeMessage;
