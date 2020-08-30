import React from "react";
import { useState } from "react";

import CheckBox from "../../../Commons/CheckBox";
import Button from "../../../Commons/Button";
import CreateEventLayout from "../../../Commons/CreateEventLayout";
import "../CreateEvent/CreateEvent.css";
import styled from "styled-components";

import ImageContainer from "../../../Components/ImageCard/ImageContainer";

const CreateEvent = () => {
  const initialState = {
    eventType: "",
    description: "",
    eventPassword: "",
    location: "",
  };
  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputCancel = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [initialState]: "",
    });
  };
  console.log(data);
  return (
    <CreateEventLayout>
      <EventForm>
        <div>
          <label className="event">
            Event Name
            <input
              className="inputName"
              type="text"
              name="eventType"
              value={data.eventType}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="event">
            Event Description
            <textarea
              className="textarea"
              name="description"
              value={data.descriptio}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <h4 className="title">Date</h4>
          <div className="calender">
            <label>
              From:
              <input type="date" name="date" required />
            </label>
            <label>
              To:
              <input type="time" name="time" required />
            </label>
          </div>
          <div>
            <label>
              Event ID
              <input
                className="eventpassword"
                type="password"
                name="eventPassword"
                placeholder="Password"
                value={data.eventPassword}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
        </div>
        <h4 className="tittle">Location</h4>
        <div className="locationCheckbox">
          <label className="switch">
            <CheckBox
              name="locationOn"
              onChange={handleInputChange}
              location={false}
              square={true}
            />
            Online
          </label>
          <label className="switch">
            <CheckBox
              name="locationOff"
              onChange={handleInputChange}
              location={false}
            />
            Offline
          </label>
        </div>
        <div>
          <input
          className="locationInput"
            type="text"
            name="location"
            placeholder="Enter Venue Location"
            value={data.location}
            onChange={handleInputChange}
          />
        </div>
        <h4 className="title">Advance</h4>
        <div className="multiple-checked">
          <div className="checklist">
            <span>Enable waiting room</span>
            <CheckBox name="waitingRoom" onChange={handleInputChange} />
          </div>
          <div className="checklist">
            <span>Enabble join before host</span>
            <CheckBox
              name="EnableHost"
              checked={false}
              onChange={handleInputChange}
            />
          </div>
          <div className="checklist">
            <span>Mute participant before entry</span>
            <CheckBox name="Mute" onChange={handleInputChange} />
          </div>
          <div className="checklist">
            <span>Auto record meeting</span>
            <CheckBox name="autoRecord" onChange={handleInputChange} />
          </div>
        </div>
        <h4 className="title">Add Images(max of 20mb for each)</h4>
        <ImageContainer></ImageContainer>
        <Button cancelbtn={false} text="Continue" />
        <Button
          cancelbtn={true}
          text="Cancel"
          onClick={handleInputCancel}
        ></Button>
      </EventForm>
    </CreateEventLayout>
  );
};
const EventForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export default CreateEvent;
