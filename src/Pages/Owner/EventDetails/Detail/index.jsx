import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import api from '../../../../APIs/endpoints';
import { getCall } from '../../../../APIs/requests';
import Colors from '../../../../Commons/Colors';
// import EventDetailBanner from '../../../../Commons/EventDetailBanner';
import EventDate from '../../../../Commons/EventDate';
import EventsCarousel from '../../../../Components/EventsCarousel';
import CopyToClipboard from 'react-copy-to-clipboard';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import toast from 'toasted-notes';

const Detail = ({ data, calendar }) => {
  // const image = '/assets/images/wedding-demo.jpg';
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      getCall(api.getUser(data?.user_id))
        .then((response) => {
          if (response.data) {
            setUser(response.data.profile);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  return (
    <>
      {/* <EventDetailBanner
        imageURL={(data && data.images[0]) || image}
        text="Upcoming Event"
      /> */}
      <EventsCarousel data={data} />
      <ContentWrapper>
        <ContentSection>
          <EventTitle>{data && data.name}</EventTitle>
          <span className="by-who">by {user?.name}</span>
        </ContentSection>
        <ContentSection>
          <CopyToClipboard
            text={`${process.env.REACT_APP_APP_LINK}/event/detail/${data?.id}`}
            onCopy={() => {
              toast.notify('Event link copied to clipboard', {
                position: 'top',
                duration: 5000,
              });
            }}
          >
            <p
              style={{
                color: `${Colors.defaultGreen}`,
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Copy Event Link
            </p>
          </CopyToClipboard>
          <p>Share on Whatsapp</p>
          <WhatsappShareButton
            url={`${process.env.REACT_APP_APP_LINK}/event/detail/${data?.id}`}
            title={'Inviting you to attend my wedding on link up'}
          >
            <WhatsappIcon size={35}></WhatsappIcon>
          </WhatsappShareButton>
        </ContentSection>
        <ContentSection>
          <EventDate
            date={data && new Date(data?.event_date).toDateString()}
            time={data && data?.event_time}
            cData={calendar}
          />
        </ContentSection>
        <ContentSection>
          <SectionTitle>About</SectionTitle>
          <p>{data && data?.description}</p>
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
