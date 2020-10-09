import React, { useEffect, useState } from 'react';
import api from '../../../../../APIs/endpoints';
import { getCall } from '../../../../../APIs/requests';
import UserList from '../../../../../Components/UserList';

const RegsisteredUsers = ({ users, data }) => {
  const [attendees, setAttendees] = useState(null);

  useEffect(() => {
    if (data) {
      getCall(api.getEventAttendee(data.id), { event_id: data.id })
        .then((response) => {
          setAttendees(response.attendee);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  const renderUsers = () => {
    return attendees?.map((user, index) => {
      return <UserList key={user.id} users={user} id={index + 1} />;
    });
  };

  return (
    <>
      {attendees?.length ? (
        renderUsers()
      ) : (
        <p style={{ textAlign: 'center' }}>
          No one as registered to attend this event
        </p>
      )}
    </>
  );
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
