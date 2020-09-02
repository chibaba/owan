import React from "react";
import ReportLayout from "../../../Components/ReportLayout";
import styled from "styled-components";
import ReportNavBtn from "../../../Components/ReportNavBtn";

import UserList from "../../../Components/UserList";

const RegsisteredUsers = () => {
  const users = [
    {
      id: 1,
      Name: "CodyFisher",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 2,
      Name: "Devon Lane",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 3,
      Name: "Marvin Mackinney",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 4,
      Name: "Ronald Richards",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 5,
      Name: "Curtney Henry",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 6,
      Name: "Ralph Edwards",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 7,
      Name: "Cody Fisher",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 8,
      Name: "FloyedMiles",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
    {
      id: 9,
      Name: "Guy Hawkins",
      Email: "aygideom14@mdi@gmail.com",
      Number: "080370177744",
      date: "2/4/2020",
      time: "9:42PM",
    },
  ];

  return (
    <ReportLayout>
      <NavBtns>
        <ReportNavBtn text="Event Details" />
        <ReportNavBtn text="Report" />
        <ReportNavBtn active={true} text="Registered Users" />
      </NavBtns>
      {users.map((user) => {
        return <UserList  key ={user.id}users={user} />;
      })}
    </ReportLayout>
  );
};
const NavBtns = styled.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: 1.2rem;
  margin: auto;
`;
export default RegsisteredUsers;
