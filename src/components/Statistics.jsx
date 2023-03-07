import PropTypes from 'prop-types';
import css from 'components/Css/Statistics.module.css'
import { StatisticsDataList } from '../components/StatisticsDataList'


export const Statistics = ({ title,stats }) => {
  return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.stat_list}>
      {stats.map(({id,label,percentage}) =>
        <StatisticsDataList
          key={id}
          label={label}
          percentage={percentage}></StatisticsDataList>
  )}
  </ul>
</section>
} 

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })),
}

