import { FriendsListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
    </ul>
  );
};