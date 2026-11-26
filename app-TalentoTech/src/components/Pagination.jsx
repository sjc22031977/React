import Pagination from "react-bootstrap/Pagination";
import "../styles/pagination.css";

export default function CustomPagination({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) {

  const pages = [];

  for (
    let i = 1;
    i <= Math.ceil(
      totalProducts /
      productsPerPage
    );
    i++
  ) {
    pages.push(i);
  }

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={
            page === currentPage
          }
          onClick={() =>
            setCurrentPage(page)
          }
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}