import React from "react";
import { Table } from "antd";
import "../listshow.css";

function TableComponent({ dataSource, columns, title }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
      <div className="custom-table-wrapper rounded-2xl">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={true}
          className="custom-table"
        />
      </div>
    </>
  );
}

export default TableComponent;
