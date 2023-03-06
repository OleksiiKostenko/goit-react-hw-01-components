import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return friends.map(({id,avatar,name,isOnline}) => {
    return (    <li key={id} className="item">
  <span className={isOnline ? "online status":"offline status" } ></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className='name'>{name}</p>
</li>)
  })
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}