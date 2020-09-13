import React from 'react';
import UserList from '../../../../../Components/UserList';

const RegsisteredUsers = ({ users }) => {
  const renderUsers = () => {
    return (
      users &&
      users.map((user) => {
        return <UserList key={user.id} users={user} />;
      })
    );
  };

  return <>{renderUsers()}</>;
};

RegsisteredUsers.defaultProps = {
  users: [
    {
      id: 1,
      Name: 'CodyFisher',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 2,
      Name: 'Devon Lane',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 3,
      Name: 'Marvin Mackinney',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 4,
      Name: 'Ronald Richards',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 5,
      Name: 'Curtney Henry',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 6,
      Name: 'Ralph Edwards',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 7,
      Name: 'Cody Fisher',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 8,
      Name: 'FloyedMiles',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
    {
      id: 9,
      Name: 'Guy Hawkins',
      Email: 'aygideom14@mdi@gmail.com',
      Number: '080370177744',
      date: '2/4/2020',
      time: '9:42PM',
    },
  ],
};
export default RegsisteredUsers;
