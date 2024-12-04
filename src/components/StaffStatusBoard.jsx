// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StaffStatusBoard({ staff, interval = 30000 }) {
    const ROWS_PER_PAGE = 8;
    const [page, setPage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPage((prevPage) => (prevPage + 1) % Math.ceil(staff.length / ROWS_PER_PAGE));
        }, interval);

        return () => clearInterval(intervalId);
    }, [staff.length, interval]);

    const currentData = staff.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

    const renderStatus = (status) => {
        const statusStyles = {
            in: { color: '#8BC34A' },
            out: { color: '#03A9F4' },
        };

        switch (status) {
            case 'in':
                return (
                    <span className="material-icons" style={statusStyles.in} aria-label="In">
            circle
          </span>
                );
            case 'out':
                return (
                    <span className="material-icons" style={statusStyles.out} aria-label="Out">
            circle
          </span>
                );
            default:
                return null;
        }
    };

    return (
        <TableContainer
            component={Paper}
            sx={{
                boxShadow: 'none',
               // border: '1px solid #e0e0e0',
               // borderRadius: '4px',
            }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="staff table">
                <caption>Page {page + 1} v2</caption>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', verticalAlign: 'middle', width: 300 }}>STAFF</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold', verticalAlign: 'middle', width: 100 }}>IN</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold', verticalAlign: 'middle', width: 100 }}>OUT</TableCell>
                        <TableCell sx={{ verticalAlign: 'middle' }}>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ textTransform: 'uppercase', verticalAlign: 'middle', fontWeight: 'bold' }}
                            >
                                {row.name}
                            </TableCell>
                            <TableCell align="center"  sx={{ verticalAlign: 'middle' }}>
                                {renderStatus(row.status === 'in' ? 'in' : '')}
                            </TableCell>
                            <TableCell align="center" sx={{ verticalAlign: 'middle' }}>
                                {renderStatus(row.status !== 'in' ? 'out' : '')}
                            </TableCell>
                            <TableCell title={row.notes} sx={{ verticalAlign: 'middle' }}>
                                {row.notes && row.notes.length > 50 ? `${row.notes.substring(0, 50)}…` : row.notes}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

StaffStatusBoard.propTypes = {
    staff: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string,
            notes: PropTypes.string,
        })
    ).isRequired,
    interval: PropTypes.number,
};

export default StaffStatusBoard;