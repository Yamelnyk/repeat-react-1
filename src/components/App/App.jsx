import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friendsData from "../../friends.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
    </>
  );
}
