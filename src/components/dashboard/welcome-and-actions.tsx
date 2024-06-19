import ImportAndAdd from './home/import-and-add';
import WelcomeMessage from './home/welcome-message';

const WelcomeAndActions = () => {
	return (
		<div>
			<div className='flex items-start justify-between'>
				<WelcomeMessage />
				<ImportAndAdd />
			</div>
		</div>
	);
};

export default WelcomeAndActions;
