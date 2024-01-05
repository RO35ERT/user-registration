const MyTable = ({data}) => {
    // console.log(data);
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
                        <td>1</td>
                        <td>Robert</td>
                        <td>Phiri</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default MyTable;
