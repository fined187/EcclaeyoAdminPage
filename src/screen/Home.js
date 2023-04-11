import { logUserOut } from "../Authentication";
import TopBox from "../components/main/NavBox";
import SLogout from "../components/main/Button";

function Home() {
	return(
		<TopBox username={localStorage.getItem("adminId")}>

		</TopBox>
	)
};

export default Home;