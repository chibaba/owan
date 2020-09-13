import React from 'react';
import styled from 'styled-components';
import Colors from '../../../../../Commons/Colors';

const Report = () => {
  const Report = {
    attendees: 458,
    Revenue: 24458,
    Likes: 458,
    Comments: 458,
    views: 548,
  };
  return (
    <>
      <ReportItem Report={Report}>
        <h4>Total Attendees</h4>
        <div>
          <img src="/assets/images/icons/greenusers.svg" alt="user" />
          <span className="figures">{Report.attendees}</span>
        </div>
      </ReportItem>
      <ReportItem Report={Report}>
        <h4>Revenue</h4>
        <div>
          <span className="icon">&#8358;</span>
          <span className="figures">{Report.Revenue}</span>
        </div>
      </ReportItem>
      <ReportItem Report={Report}>
        <h4>Total Likes</h4>
        <div>
          <img src="/assets/images/icons/likes.svg" alt="user" />
          <span className="figures">{Report.Likes}</span>
        </div>
      </ReportItem>
      <ReportItem Report={Report}>
        <h4>Total Comments</h4>
        <div>
          <img src="/assets/images/icons/comments.svg" alt="user" />
          <span className="figures">{Report.Comments}</span>
        </div>
      </ReportItem>
      <ReportItem Report={Report}>
        <h4>Total Views</h4>
        <div>
          <img src="/assets/images/icons/views.svg" alt="user" />
          <span className="figures">{Report.views}</span>
        </div>
      </ReportItem>
      <LocationDiv>
        <h4>Locations</h4>
        <li>
          <span>1</span>Nigeria
        </li>
        <li>
          <span>2</span>South African
        </li>
        <li>
          <span>3</span>China
        </li>
        <li>
          <span>4</span>Trinidad & Tobago
        </li>
      </LocationDiv>
    </>
  );
};

const ReportItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1.2rem;
  border-bottom: 1px solid #c4c4c4;
  span.figures {
    margin-left: 0.5rem;
    color: ${Colors.lightTextColor};
    font-weight: 100;
  }
  span.icon {
    color: ${Colors.defaultGreen};
    font-size: 18px;
  }
`;
const LocationDiv = styled.div`
  padding-left: 1.2rem;
  li {
    list-style: none;
    margin-bottom: 10px;
    font-size: 18px;
  }
  span {
    color: ${Colors.defaultGreen};
    margin-right: 10px;
  }
`;
export default Report;
