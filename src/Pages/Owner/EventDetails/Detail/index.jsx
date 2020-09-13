import React from 'react';
import Styled from 'styled-components';
import Colors from '../../../../Commons/Colors';
import AddToCalendar from 'react-add-to-calendar';

const Detail = ({ event }) => {
  return (
    <>
      <EventBanner>
        <div className="overlay"></div>
        <p>Upcoming Event</p>
        <img src="/assets/images/wedding-demo.jpg" alt="banner" />
      </EventBanner>
      <ContentWrapper>
        <ContentSection>
          <EventTitle>Pride at the Disco!</EventTitle>
          <span className="by-who">by Tinji Obaoye</span>
        </ContentSection>
        <ContentSection>
          <EventDates>
            <img src="/assets/images/icons/calendar.svg" alt="calendar" />
            <div>
              <p>Fri, 28 Jun 2019</p>
              <p className="time">5:00PM - 8:00 GMT+1</p>
              <AddToCalendarButton>
                <AddToCalendar event={event} displayItemIcons={true} />
              </AddToCalendarButton>
            </div>
          </EventDates>
        </ContentSection>
        <ContentSection>
          <SectionTitle>About</SectionTitle>
          <p>
            Reduce the thickness of the first and second divider. Ensure the
            spacing between deal gallery and fix the slider icon underneath.
            Write N40,000 and N4,000 properly without any space. Make “per
            night” all caps and make it orange color. Increase the spacing
            between the items on the header and the form fields. Its “add to
            cart” and not “add to chart”. Increase the button height of “add to
            cart”. Change the color of “2 points”. Reduce the thick line that
            separates “number of guests” and “total amount”
          </p>
        </ContentSection>
      </ContentWrapper>
      <ContentSection>
        <SectionTitle style={{ width: '90%', margin: '15px auto' }}>
          Location on Map
        </SectionTitle>
        <MapArea></MapArea>
      </ContentSection>
    </>
  );
};

const EventBanner = Styled.div`
  width: "100%";
  height: 220px;
  overflow: hidden;
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 99;
  }
  img {
    width: 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    padding: 15px 5%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    width: 100%;
    z-index: 999;
    margin: 0;
    font-size: 12px;
  }
`;

const ContentWrapper = Styled.main`
  width: 90%;
  margin: auto;
`;

const ContentSection = Styled.section`
  width: 100%;
  margin-top: 30px;
  span.by-who {
    color: ${Colors.defaultGreen};
    font-size: 12px;
    font-weight: bold;
  }
  p {
    color:  ${Colors.textColor};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.8;
  }
`;

const SectionTitle = Styled.h3`
  margin-bottom: 10px;
`;

const EventTitle = Styled.h2`
  margin: 0;
`;

const MapArea = Styled.div`
  width: 100%;
  height: 200px;
  background: ${Colors.textColor};
`;

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

Detail.defaultProps = {
  event: {
    title: 'Pride at the Disco',
    description: 'This is link up reminder',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00',
  },
};

export default Detail;
