import React from "react";
import "../../listshow.css"; 
import TableComponent from "../Table";

function ListShowContent() {

  const dataSource = [
    {
      key: "1",
      movieName: "Movie 1",
      showTime: "2025-08-31 10:00PM",
      totalBookings: 10,
      earnings: 100,
    },
    {
      key: "2",
      movieName: "Movie 2",
      showTime: "2025-08-31 12:00PM",
      totalBookings: 20,
      earnings: 200,
    },
    {
      key: "3",
      movieName: "Movie 3",
      showTime: "2025-08-31 2:00PM",
      totalBookings: 30,
      earnings: 300,
    },
    {
      key: "4",
      movieName: "Movie 4",
      showTime: "2025-08-31 4:00PM",
      totalBookings: 40,
      earnings: 400,
    },
    {
      key: "5",
      movieName: "Movie 5",
      showTime: "2025-08-31 6:00PM",
      totalBookings: 50,
      earnings: 500,
    },
    {
      key: "6",
      movieName: "Movie 6",
      showTime: "2025-08-31 8:00PM",
      totalBookings: 60,
      earnings: 600,
    },
    {
      key: "7",
      movieName: "Movie 7",
      showTime: "2025-08-31 10:00PM",
      totalBookings: 70,
      earnings: 700,
    },
    {
      key: "8",
      movieName: "Movie 8",
      showTime: "2025-08-31 12:00AM",
      totalBookings: 80,
      earnings: 800,
    },
    {
      key: "9",
      movieName: "Movie 9",
      showTime: "2025-08-31 2:00AM",
      totalBookings: 90,
      earnings: 900,
    },
    {
      key: "10",
      movieName: "Movie 10",
      showTime: "2025-08-31 4:00AM",
      totalBookings: 100,
      earnings: 1000,
    },
  ];

  const columns = [
    { title: "Movie Name", dataIndex: "movieName", key: "movieName" },
    { title: "Show Time", dataIndex: "showTime", key: "showTime" },
    {
      title: "Total Bookings",
      dataIndex: "totalBookings",
      key: "totalBookings",
    },
    { title: "Earnings", dataIndex: "earnings", key: "earnings" },
  ];

  return (
    <>
    <TableComponent dataSource={dataSource} columns={columns} title="List of Shows" />
    </>
  );
}

export default ListShowContent;
