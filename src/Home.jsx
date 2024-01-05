import MyTable from "./MyTable";
import UseFetch from "./useFetch";

const Home = () => {
    const {data:users,isPending,error} = UseFetch('http://127.0.0.1:3000/api/users');
    return ( 
        <div className="home">
            <MyTable data={users} status={isPending} error={error}/>
        </div>
     );
}

export default Home;