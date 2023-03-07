import { Profile } from '../components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';
import user from 'part/user';
import data from 'part/data';
import friends from 'part/friends';
import transactions from 'part/transactions';



export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />  
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </>
  );
};

