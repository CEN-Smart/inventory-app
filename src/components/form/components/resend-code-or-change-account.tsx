const ResendCodeOrChangeAccount = () => {
	return (
		<div className='flex items-center gap-2 text-muted-400'>
			<p className='text-xs'>Didn&apos;t receive it?</p>
			<button
				type='button'
				className='text-xs font-semibold border-b border-muted-400 hover:border-none transition duration-300'>
				Resend code
			</button>
			<span className='text-xs'>or</span>
			<button
				type='button'
				className='text-xs font-semibold border-b border-muted-400 hover:border-none transition duration-300'>
				Change account
			</button>
		</div>
	);
};

export default ResendCodeOrChangeAccount;
