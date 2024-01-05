const MyTable = ({error,data,status}) => {
    console.log(data[0]);
    return ( 
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {status && <td>Loading.....</td>}
                    </tr>
                    <tr>
                        {error && <td>{error}</td>}
                    </tr>
                    {/* { data.map((user)=>{
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                        </tr>
                    }) } */}
                </tbody>
            </table>
        </div>
     );
}
 
export default MyTable;
