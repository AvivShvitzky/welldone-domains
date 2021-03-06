import React from "react";
import styled from 'styled-components'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
import { GlobalFilter } from "./GlobalFilter";

function Table({ columns, data, onClickHandler }) {
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize, globalFilter },
      setGlobalFilter
  } = useTable(
      {
          columns,
          data,
          initialState: { pageIndex: 0, pageSize: 5 },
      },
      useGlobalFilter,
      useSortBy,
      usePagination,
  )

  // Render the UI for your table
  return (
      <div>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <table className="table" {...getTableProps()}>
              <thead>
                  {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(column => (
                              <th {...column.getHeaderProps(column.getSortByToggleProps())}
                              >
                                <span style={{userSelect: 'none'}}>
                                  {column.render('Header')}
                                </span>
                                {/* Add a sort direction indicator */}
                                <span>
                                  {column.isSorted
                                    ? column.isSortedDesc
                                      ? ' 🔽'
                                      : ' 🔼'
                                    : ''}
                                </span>
                              </th>
                          ))}
                      </tr>
                  ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                      prepareRow(row)
                      return (
                          <tr className="tr"
                            onClick={() => onClickHandler(row.original)}
                            {...row.getRowProps()} 
                          >
                              {row.cells.map(cell => {
                                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                              })}
                          </tr>
                      )
                  })}
              </tbody>
          </table>
          {/* 
      Pagination can be built however you'd like. 
      This is just a very basic UI implementation:
    */}
          <ul className="pagination">
              <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  <a className="page-link">First</a>
              </li>
              <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                  <a className="page-link">{'<'}</a>
              </li>
              <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                  <a className="page-link">{'>'}</a>
              </li>
              <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                  <a className="page-link">Last</a>
              </li>
              <li>
                  <a className="page-link">
                      Page{' '}
                      <strong>
                          {pageIndex + 1} of {pageOptions.length}
                      </strong>{' '}
                  </a>
              </li>
              <li>
                  <a className="page-link">
                      <input
                          className="form-control"
                          type="number"
                          defaultValue={pageIndex + 1}
                          onChange={e => {
                              const page = e.target.value ? Number(e.target.value) - 1 : 0
                              gotoPage(page)
                          }}
                          style={{ width: '100px', height: '20px' }}
                      />
                  </a>
              </li>{' '}
              <select
                  className="form-control"
                  value={pageSize}
                  onChange={e => {
                      setPageSize(Number(e.target.value))
                  }}
                  style={{ width: '120px', height: '38px' }}
              >
                  {[5, 10, 20, 30, 40, 50].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                      </option>
                  ))}
              </select>
          </ul>
      </div >
  )
}

const TableBox = ({columns, data, onClickHandler}) => {
    return (
        <Table columns={columns} data={data} onClickHandler={onClickHandler} />
    )
}

export default TableBox;

