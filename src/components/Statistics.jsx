import PropTypes from 'prop-types';
import { StatisticsDataList } from '../components/StatisticsDataList'


export const Statistics = ({ stats }) => {
  return <section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
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

// console.log(Math.floor(Math.random()*16777215).toString(16));