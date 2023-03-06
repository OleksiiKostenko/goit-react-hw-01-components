import PropTypes from 'prop-types';

export const StatisticsDataList = ({ label, percentage }) => {
    return <li style={{backgroundColor: `#${randomColor()}` }}>
        <span className="label">{label}  </span>
        <span className="percentage">  {percentage}%</span>
      </li>
}


StatisticsDataList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


function randomColor() {
    const bgc = Math.floor(Math.random() * 16777215).toString(16);
    return bgc;
}