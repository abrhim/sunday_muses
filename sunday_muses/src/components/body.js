import React, {Component} from 'react'
import MUIDataTable from 'mui-datatables'
<<<<<<< HEAD



const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
=======
import data from '../UNdata.nano.json'

const columns = ["Country or Area",
    "Year",
    "Area",
    "Sex",
    "Religion",
    "Record Type",
    "Reliability",
    "Source Year", 
    "Value", 
    "Value Footnote"
>>>>>>> 4214068cd14e5186c134c00e0af0ffe61a702342
];

const options = {
    filterType: 'checkbox',
    pagination: false,
    selectableRows: false,
    responsive: 'scroll',
    print: false,
    download: false,
    setRowProps: null,
    // function(row: array, rowIndex: number) => object
    onRowClick: null,
    // function(rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void
};

class Body extends Component{

    render(){
        return(    
        <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
        />
            )
    }

}


export default Body;


