import React, { useMemo } from "react";
import { useTable, useGlobalFilter , useFilters } from "react-table";
import ColumnFilter from "./ColumnFilter";
import { COLUMNS } from "./Colums";
import GlobalFilter from "./GlobalFilter";
import MOCK_DATA from "./MOCK_DATA.json";
import "./table.css";

const FilterTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() =>{
    return{
      Filter : ColumnFilter
    }
  } , [])

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter
  );

  const {
    getTableProps,
    footerGroups,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}
                  <div>
                    {column.canFilter ? column.render('Filter') : null }
                  </div>
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
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default FilterTable
