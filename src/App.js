import { printProps } from "./printProps";
import UserInfo from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, "13");

function App() {
  return <UserInfoWithLoader a="Test" b="ThisComponent" />;
}

export default App;
