import PropTypes from 'prop-types';
import css from 'components/Css/FriendList.module.css'
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return <ul className={css.friend_list}>
  {  friends.map(({ id, avatar, name, isOnline }) => {
    return (<li key={id} className={css.item}>
  <span className={clsx(css.status, isOnline && css.online, !isOnline && css.offline)} ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
  </li>)
  })}
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