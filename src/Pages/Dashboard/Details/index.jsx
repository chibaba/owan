import React from 'react';
import Styled from 'styled-components';
import Colors from '../../../Commons/Colors';
import EventDetailBanner from '../../../Commons/EventDetailBanner';
import EventDate from '../../../Commons/EventDate';

const DashboardDetail = () => {
  const image = '/assets/images/wedding-demo.jpg';
  return (
    <>
      <EventDetailBanner imageURL={image} text="Upcoming Event" />
      <ContentWrapper>
        <ContentSection>
          <EventTitle>Pride at the Disco!</EventTitle>
          <span className="by-who">by Tinji Obaoye</span>
        </ContentSection>
        <ContentSection>
          <EventDate date="Fri, 28 Jun 2019" time="5:00PM - 8:00 GMT+1" />
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

DashboardDetail.defaultProps = {
  event: {
    title: 'Pride at the Disco',
    description: 'This is link up reminder',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00',
  },
};

export default DashboardDetail;
