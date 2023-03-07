import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from 'components/Css/FriendList.module.css'

export const FriendListEl = ({ avatar, name, isOnline }) => {
 return (<li className={css.item}>
  <span className={clsx(css.status, isOnline && css.online, !isOnline && css.offline)} ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
  </li>)
}


FriendListEl.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}