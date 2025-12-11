import React from "react";
import "../../listshow.css"; 
import TableComponent from "../Table";

function ListBookingContent() {

  const dataSource = [
    {
      key: "1",
      userName: "John Doe",
      movieName: "Movie 1",
      showTime: "2025-08-31 10:00PM",
      seats: "A1, A2",
      amount: 100,
    },
    {
      key: "2",
      userName: "Jane Doe",
      movieName: "Movie 2",
      showTime: "2025-08-31 12:00PM",
      seats: "A1, A2",
      amount: 200,
    },
    {
      key: "3",
      userName: "Jim Beam",
      movieName: "Movie 3",
      showTime: "2025-08-31 2:00PM",
      seats: "A1, A2",
      amount: 300,
    },
    {
      key: "4",
      userName: "Jane Doe",
      movieName: "Movie 4",
      showTime: "2025-08-31 4:00PM",
      seats: "A1, A2",
      amount: 400,
    },
    {
      key: "5",
      userName: "Jim Beam",
      movieName: "Movie 5",
      showTime: "2025-08-31 6:00PM",
      seats: "A1, A2",
      amount: 500,
    },
    {
      key: "6",
      userName: "Jane Doe",
      movieName: "Movie 6",
      showTime: "2025-08-31 8:00PM",
      seats: "A1, A2",
      amount: 600,
    },
    {
      key: "7",
      userName: "Jim Beam",
        movieName: "Movie 7",
      showTime: "2025-08-31 10:00PM",
      seats: "A1, A2",
      amount: 700,
    },
    {
      key: "8",
      userName: "Jane Doe",
      movieName: "Movie 8",
      showTime: "2025-08-31 12:00AM",
      seats: "A1, A2",
      amount: 800,
    },
    {
      key: "9",
      userName: "Jim Beam",
      movieName: "Movie 9",
      showTime: "2025-08-31 2:00AM",
      seats: "A1, A2",
      amount: 900,
    },
    {
      key: "10",
      userName: "Jane Doe",
      movieName: "Movie 10",
      showTime: "2025-08-31 4:00AM",
      seats: "A1, A2",
      amount: 1000,
    },
  ];

  const columns = [
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "Movie Name", dataIndex: "movieName", key: "movieName" },
    { title: "Show Time", dataIndex: "showTime", key: "showTime" },
    {
      title: "Seats",
      dataIndex: "seats",
      key: "seats",
    },
    { title: "Amount", dataIndex: "amount", key: "amount" },
  ];

  return (
    <>
    <TableComponent dataSource={dataSource} columns={columns} title="List of Bookings" />
    </>
  );
}

export default ListBookingContent;
