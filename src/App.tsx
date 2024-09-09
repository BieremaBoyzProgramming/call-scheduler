import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function BasicTable() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Chief Surgery</TableCell>
              <TableCell>Chief Trauma</TableCell>
              <TableCell>PGY-2 Trauma</TableCell>
              <TableCell>PGY-1 POG</TableCell>
              <TableCell>PGY-1 CTV</TableCell>
              <TableCell>PGY-1 Trauma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>July 1</TableCell>
              <TableCell>
                <Chip label="Alice" />
              </TableCell>
              <TableCell>
                <Chip label="Bob" />
              </TableCell>
              <TableCell>
                <Chip label="Charlie" />
              </TableCell>
              <TableCell>
                <Chip label="Dede" />
              </TableCell>
              <TableCell>
                <Chip label="Earn" />
              </TableCell>
              <TableCell>
                <Chip label="Frank" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
