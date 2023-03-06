import PropTypes from 'prop-types';

export const StatisticsDataList = ({ label, percentage }) => {
    return <li>
        <span className="label">{label}  </span>
        <span className="percentage">  {percentage}%</span>
      </li>
}


StatisticsDataList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


