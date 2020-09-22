import React, { useRef } from 'react';
import Styled from 'styled-components';

function EventsCarousel({ data }) {
  const wrapperRef = useRef(null);

  function renderEvents() {
    return (
      data &&
      data.images.map((image, index) => {
        return (
          <CarouselItem
            key={index}
            id={index}
            style={{
              background: `url('${image}') no-repeat`,
              backgroundSize: 'cover',
            }}
          ></CarouselItem>
        );
      })
    );
  }

  function renderDots() {
    return (
      data &&
      data.images.map((event, index) => {
        return <SingleDot key={index} />;
      })
    );
  }

  return (
    <>
      <CarouselWrapper ref={wrapperRef}>
        {renderEvents()}
        <SpaceAtEnd />
      </CarouselWrapper>
      <CarouselDotsWrapper>
        <ActiveDot />
        {renderDots()}
      </CarouselDotsWrapper>
    </>
  );
}

const CarouselWrapper = Styled.div`
  width: 95%;
  overflow-x: auto;
  display: flex;
  align-self: flex-end;
  flex-wrap: no-wrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const CarouselItem = Styled.div`
  width: 218px;
  min-width: 218px;
  height: 246px;
  background: #ccc;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 5px;
`;

const SpaceAtEnd = Styled.div`
  width: 10px;
  min-width: 10px;
  height: 246px;
`;

const CarouselDotsWrapper = Styled.section`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SingleDot = Styled.a`
  width: 6px;
  height: 6px;
  background: #28C101;
  border-radius: 50%;
  opacity: 0.2;
  display: block;
  text-decoration: none;
  margin-right: 5px;
`;

const ActiveDot = Styled.a`
  width: 21px;
  height: 6px;
  background: #28C101;
  margin-right: 5px;
  border-radius: 30px;
`;

export default EventsCarousel;
