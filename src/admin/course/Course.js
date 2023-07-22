import React, { useEffect } from 'react';
import CourseForm from '../CourseForm';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../../user/redux/action/course.action';

function Course(props) {

    const dispatch = useDispatch();
    const course = useSelector(state => state.course)


    useEffect(() => {
        dispatch(getData())
    },[])

    const columns = [
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'fees', headerName: 'Fees', width: 130 },
       
        
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
    
    return (
        <>
        <CourseForm  />

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={course.course}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
        </>
    );
}

export default Course;