import React from 'react';
import './TableList.css'; // Import the CSS file for TableList

const TableList = () => {
  const tables = [
    { id: 1, name: 'Table 1', capacity: 4 },
    { id: 2, name: 'Table 2', capacity: 2 },
    { id: 3, name: 'Table 3', capacity: 6 },
    { id: 4, name: 'Table 4', capacity: 4 },
  ];

  return (
    <div className="table-list">
      <h1>Tables</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.name}</td>
              <td>{table.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
