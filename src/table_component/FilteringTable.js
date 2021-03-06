import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
  useSortBy
  // useAsyncDebounce,
} from "react-table";
// import ColumnFilter from "./ColumnFilter";
import { COLUMNS } from "./Colums";
import GlobalFilter from "./GlobalFilter";
import MOCK_DATA from "./MOCK_DATA.json"
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

// import "./table.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import CheckBox from "./CheckBox";
import DropDownFilter from "./DropDownFilter";

const FilteringTable = () => {
  
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      // Filter: ColumnFilter,
      Filter: '',
    };
  }, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    selectedFlatRows,
    getToggleHideAllColumnsProps, //method
  } = tableInstance;

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;
  // const firstPageRows = rows.slice(0, 10);


  return (
    <div>
      <div style={{ textAlign: "end", padding: "10px" }}>
        {/* Global filter component  */}
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        {/* Global filter end here  */}


        {/* Trying to make my own filter  */}
        <DropDownFilter
          column={tableInstance}
        />
        {/* Trying to make my own filter  */}
        {/* select the page size code  */}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {/* section page size end here  */}

        {/* Dropdown list */}
        <MDBDropdown>
          <MDBDropdownToggle>Hide and Seek</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <div>
                <input type="checkbox" {...getToggleHideAllColumnsProps()} />
                Toggle All
              </div>
            </MDBDropdownItem>
            <MDBDropdownItem>
              {allColumns.map((column) => (
                <div key={column.id}>
                  <input type="checkbox" {...column.getToggleHiddenProps()} />
                  {column.Header}
                </div>
              ))}
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        {/* dropdown list end here  */}
      </div>

      <div>
        <MDBTable {...getTableProps()}>
          <MDBTableHead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (


                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}

                    {/* <span>
                      {column.isSorted
                      .0
                        ? column.isSortedDesc
                          ? ' ????'
                          : ' ????'
                        : ''}
                    </span> */}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>


                ))}
              </tr>
            ))}
          </MDBTableHead>

          <MDBTableBody {...getTableBodyProps()}>
            {page.map((row) => {
              // change the page to rows to see the all list of data in one page
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
          </MDBTableBody>

          {/* Footer code  */}
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps}>{column.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot>
          {/* footer code end  */}
        </MDBTable>

        {/* selected row code show in ui in table */}
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
        {/* Code of data end here */}
      </div>
      <div>
        {/* Showing the code of total no of pages and which page is currently opened  */}
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          Go to page:{"  "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        {/* Page end here to show the total pages and etc.... */}

        {/* next page previous page and initial page and the last page stating the code  */}
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previouse
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        {/* Pages code end here  */}
      </div>
    </div>
  );
};

export default FilteringTable;
