import { useTable } from "react-table";

const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    return (
        <table {...getTableProps()} className="border-collapse w-full">
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border p-2">
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
                <tr {...row.getRowProps()} className="border">
                {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="border p-2">
                    {cell.render("Cell")}
                    </td>
                ))}
                </tr>
            );
            })}
        </tbody>
        </table>
    );
};

export default Table;
