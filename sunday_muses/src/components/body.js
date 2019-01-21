import React, {Component} from 'react'
import MUIDataTable from 'mui-datatables'
import data from '../UNdata.nano.json'

// https://github.com/gregnb/mui-datatables/pull/331

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


