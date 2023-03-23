import News from '../news/News';
import Services from '../services/Services';
import style from './main-container.module.scss';
const MainContainer = () => {
	return (
		<>
			<div className={style['main-container']}>
				<News />
				<Services />
			</div>
		</>
	);
};

export default MainContainer;
