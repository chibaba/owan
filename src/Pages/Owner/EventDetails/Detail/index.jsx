import React from 'react';
import Styled from 'styled-components';
import Colors from '../../../../Commons/Colors';
import EventDetailBanner from '../../../../Commons/EventDetailBanner';
import EventDate from '../../../../Commons/EventDate';

const Detail = ({ data, calendar }) => {
  const image = '/assets/images/wedding-demo.jpg';
  return (
    <>
      <EventDetailBanner
        imageURL={(data && data.images[0]) || image}
        text="Upcoming Event"
      />
      <ContentWrapper>
        <ContentSection>
          <EventTitle>{data && data.name}</EventTitle>
          <span className="by-who">by Tinji Obaoye</span>
        </ContentSection>
        <ContentSection>
          <EventDate
            date={data && new Date(data.event_date).toDateString()}
            time={data && data.event_time}
            cData={calendar}
          />
        </ContentSection>
        <ContentSection>
          <SectionTitle>About</SectionTitle>
          <p>{data && data.description}</p>
        </ContentSection>
      </ContentWrapper>
      {/* <ContentSection>
        <SectionTitle style={{ width: '90%', margin: '15px auto' }}>
          Location on Map
        </SectionTitle>
        <MapArea></MapArea>
      </ContentSection> */}
    </>
  );
};

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

// const MapArea = Styled.div`
//   width: 100%;
//   height: 200px;
//   background: ${Colors.textColor};
// `;

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
