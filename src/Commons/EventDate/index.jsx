import React from 'react';
import Styled from 'styled-components';
import AddToCalendar from 'react-add-to-calendar';
import Colors from '../Colors';

const EventDate = ({ date, time, event, style }) => {
  return (
    <EventDates style={style}>
      <img src="/assets/images/icons/calendar.svg" alt="calendar" />
      <div>
        <p>{date}</p>
        <p className="time">{time}</p>
        <AddToCalendarButton>
          <AddToCalendar event={event} displayItemIcons={true} />
        </AddToCalendarButton>
      </div>
    </EventDates>
  );
};

const EventDates = Styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    margin-right: 20px;
    width: 20px;
    height: 20px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: normal;
    margin-bottom: 5px;
  }
  p.time {
    font-weight: normal;
  }
`;

const AddToCalendarButton = Styled.div`
  a {
    background: none;
    border: none;
    outline: none;
    color: ${Colors.defaultGreen};
    font-size: 14px;
  }
`;

export default EventDate;
