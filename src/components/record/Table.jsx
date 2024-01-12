import { useTable, useGlobalFilter, useSortBy } from "react-table";
import styled from "styled-components";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}

export default Table;

/* 기본 Wrapper 스타일 */
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #f9faff;
  align-items: center;
`;

/* 추가적인 Table 스타일 */
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd; /* Add border between cells */
    text-align: left;
    font-size: 12px;
  }

  th {
    background-color: #f2f2f2;
    /* Add a background color to header cells */
  }

  tbody tr:hover {
    background-color: #f5f5f5; /* Add a background color on hover for rows */
  }
`;
