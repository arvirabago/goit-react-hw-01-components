import css from "./FriendListItem.module.css"


export const FriendsListItem = ({ avatar, isOnline, name }) => {
    return (<li className={css.item}>
  <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>) }