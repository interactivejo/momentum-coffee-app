import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody, 
    TablePagination
} from '@mui/material'
import React from 'react'

const OrderHistoryTable = () => {

    function createData(
        orderNumber: number,
        name: string,
        order: string,
        createdAt: string,
        completedAt: string,
        date: string,
      ) {
        return { orderNumber, name, order, createdAt, completedAt, date };
      }

      const rows = [
        createData(1056, 'John Doe', 'Iced Latte', '9:50am', '9:55am', 'May 2, 2023'),
        createData(1056, 'John Doe', 'Iced Latte', '9:50am', '9:55am', 'May 2, 2023'),
        createData(1056, 'John Doe', 'Iced Latte', '9:50am', '9:55am', 'May 2, 2023'),
        createData(1056, 'John Doe', 'Iced Latte', '9:50am', '9:55am', 'May 2, 2023'),
        createData(1056, 'John Doe', 'Iced Latte', '9:50am', '9:55am', 'May 2, 2023'),
      ];

      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      const [page, setPage] = React.useState(0);

      const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead
                    sx={{
                        fontFamily: 'futura-pt, sans-serif',
                    }}
                >
                    <TableRow>
                        <TableCell sx={{ borderBottom: 'none',}}>Order Number</TableCell>
                        <TableCell sx={{ borderBottom: 'none',}}>Name</TableCell>
                        <TableCell sx={{ borderBottom: 'none',}}>Order</TableCell>
                        <TableCell sx={{ borderBottom: 'none',}}>Created At</TableCell>
                        <TableCell sx={{ borderBottom: 'none',}}>Completed</TableCell>
                        <TableCell sx={{ borderBottom: 'none',}}>Date</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody
                    sx={{
                        backgroundColor: '#F9F7FB',
                    }}
                >
                    {rows.map((row) => (
                        <TableRow
                            key={Math.random()}>
                            
                            <TableCell>#{row.orderNumber}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.order}</TableCell>
                            <TableCell>{row.createdAt}</TableCell>
                            <TableCell>{row.completedAt}</TableCell>
                            <TableCell>{row.date}</TableCell>

                        </TableRow>
                    
                    ))}
                   
                </TableBody>


            </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
  )
}

export default OrderHistoryTable