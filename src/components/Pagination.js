import Pagination from '@mui/material/Pagination';
import { blue } from '@mui/material/colors';

const bgColor = blue[50];

function DataPagination({ itemsPerPage, totalItems, page, setPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) { //Allows pagination.
    pageNumbers.push(i);
  }

  return (
    <Pagination
      count={pageNumbers.length}
      page={page}
      onChange={(event, value) => { setPage(value); }}
      color="primary"
      sx={{ justifyContent: "center", display: 'flex', m: "40px 0 30px 0", p: 1, bgcolor: bgColor, borderRadius: 1 }}
    />
  );
}

export default DataPagination;