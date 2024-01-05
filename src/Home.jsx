import MyTable from "./MyTable";
import UseFetch from "./useFetch";

const Home = () => {
    const users = UseFetch('http://127.0.0.1:3000/api/users');
    return ( 
        <div className="home">
            <MyTable data={first=>"Robert"}/>
        </div>
     );
}

export default Home;