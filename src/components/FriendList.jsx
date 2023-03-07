import PropTypes from 'prop-types';
import css from 'components/Css/FriendList.module.css'
import {FriendListEl} from 'components/FriendListEl'


export const FriendList = ({ friends }) => {
  return <ul className={css.friend_list}>
  {friends.map(({ id, avatar, name, isOnline  }) => 
    <FriendListEl key={id} avatar={avatar} name={name} isOnline={isOnline}></FriendListEl>
  )}
</ul>
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