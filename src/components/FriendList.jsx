export const  FriendList = ({friends}) => {
  return friends.map((friends) => {
    return (    <li key={friends.id} className="item">
  <span className="{friends.isOnline}"></span>
  <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
  <p className='name'>{friends.name}</p>
</li>)
  })
}
