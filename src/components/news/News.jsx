import { NEWS } from '../../constants/consts';
import style from './news.module.scss';

const News = () => {
	return (
		<section className={style.news}>
			<h2 className={style['news-title']}>New</h2>
			{NEWS.map(item => (
				<div key={item.id} className={style['news-item']}>
					<h3 className={style['news-subtitle']}>{item.title}</h3>
					<p className={style['news-data']}>{item.data}</p>
				</div>
			))}
		</section>
	);
};

export default News;
