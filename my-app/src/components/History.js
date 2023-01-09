import React from 'react'
import { Container } from 'react-bootstrap'

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faCoffee, faHandBackFist, faHouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  
    {
        field: 'time',
        headerName: 'Time',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'amount',
        headerName: 'Amount ',
        type: 'number',
        width: 110,
        editable: false,
    },
 
   
 
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', time: "2:30",date:"02/28",amount:"1000", },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', time: "4:00",date:"02/28",amount:"300", },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', time: "13:50",date:"02/28",amount:"3000", },
    { id: 4, lastName: 'Stark', firstName: 'Arya', time: "15:08",date:"02/28",amount:"2000" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', time: "15:00",date:"02/28",amount:"5000" },
    { id: 6, lastName: 'Melisandre', firstName: null, time: "10:00",date:"02/28",amount:"2000" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', time: "8:00",date:"02/28",amount:"300" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', time: "16:05",date:"02/28",amount:"10,000" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', time: "22:00",date:"02/28",amount:"6000" },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', time: "7:00",date:"02/28",amount:"8000" },
];

function History() {
    return (
        <>
            <div className='history bg'>


                <Container>
                    <div className='pt-4'>
                        <Link to="/"><div className='backtohome'> <span className='me-2'><FontAwesomeIcon icon={faHouse} /></span>Back to Home</div></Link>
                    </div>

                    <div className='title pad-23 m-0'>Transaction History</div>

                    <div className='historytable'>
                        <Box sx={{ height: 500, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[5]}
                                // checkboxSelection
                                disableSelectionOnClick
                                experimentalFeatures={{ newEditingApi: true }}
                            />
                        </Box>
                    </div>

                </Container>

            </div>
        </>
    )
}

export default History
