import { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import "../App.css";

const TableComponent = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Departamento",
        accessor: "departamento_nom",
      },
      {
        Header: "Ciudad/Municipio",
        accessor: "ciudad_municipio_nom",
      },
      {
        Header: "Ubicacion",
        accessor: "ubicacion",
      },
      {
        Header: "Edad",
        accessor: "edad",
      },
      {
        Header: "Estado",
        accessor: "estado",
      },
      {
        Header: "Recuperado",
        accessor: "recuperado",
      },
      {
        Header: "Tipo de recuperacion",
        accessor: "tipo_recuperacion",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      {}
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
