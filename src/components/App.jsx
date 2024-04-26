import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../data/data.json";
import { FriendsList } from "./FriendList/FriendList";
import friends from "../data/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "../data/transaction.json";


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendsList friends={friends} />

      <TransactionHistory items={transaction} />;
    
    </div>
  );
};