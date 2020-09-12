import React from 'react';
import { useState } from 'react';

import Button from '../../../Commons/Button';
import CreateEventLayout from '../../../Commons/CreateEventLayout';
import styled from 'styled-components';

import FormInput from '../../../Components/FormInput/Index';
import FormTextarea from '../../../Components/FormTextarea/Index';
import DateInput from '../../../Components/DateInput';
import TimeInput from '../../../Components/TimeInput';
import RadioButton from '../../../Components/RadioButton';
import ImageUploadButton from '../../../Components/EventImageUploadButton';
import CheckBox from '../../../Components/CheckBox';
import FormAlert from '../../../Components/FormAlert';

const CreateEvent = () => {
  const initialState = {
    eventType: '',
    description: '',
    eventPassword: '',
    location: '',
    eventDate: '',
    eventTime: '',
    cashGiftEnable: false,
    sendReminder: false,
  };
  const [data, setData] = useState(initialState);
  const [modalState, setModalState] = useState({
    show: false,
    message: null,
    type: null,
  });

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
      [initialState]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalState({
      type: 'success',
      show: true,
      message: 'Successfully created account',
    });
  };

  const handleCloseModal = () => {
    setModalState({ type: null, show: false, message: null });
  };

  const handleRadioSelect = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  console.log(data);

  return (
    <>
      {modalState.show ? (
        <FormAlert
          type={modalState.type}
          message={modalState.message}
          closeModal={handleCloseModal}
          link="llinkup.com/wqiwuf2423424"
        />
      ) : null}
      <CreateEventLayout>
        <EventForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="eventType"
            value={data.eventType}
            onChange={handleInputChange}
            required={true}
            label="Event Name"
          />
          <FormTextarea
            name="description"
            value={data.descriptio}
            onChange={handleInputChange}
            required
            label="Event description"
          />
          <div className="multiple-inputs">
            <DateInput
              className="half"
              name="eventDate"
              label="Date"
              placeholder="Date"
              value={data.eventDate}
              onChange={handleInputChange}
            />
            <TimeInput
              className="half"
              name="eventTime"
              value={data.eventTime}
              onChange={handleInputChange}
            />
          </div>
          <h4 className="tittle">Location</h4>
          <div className="radio-area multiple">
            <RadioButton
              name="location"
              label="Online"
              value="online"
              onSelect={handleRadioSelect}
            />
            <RadioButton
              name="location"
              label="Offline"
              value="offline"
              onSelect={handleRadioSelect}
            />
          </div>
          <FormInput
            type="text"
            name="eventType"
            value={data.eventType}
            onChange={handleInputChange}
            required={true}
            placeholder="Event venue location"
          />
          <h4 className="title">Advance</h4>
          <div className="multiple-checked">
            <div className="checklist">
              <span>Enable cash gifts</span>
              <CheckBox
                name="cashGiftEnable"
                onChange={handleCheckbox}
                checked={data.cashGiftEnable}
              />
            </div>
            <div className="checklist">
              <span>Enable send event reminder</span>
              <CheckBox
                name="sendReminder"
                onChange={handleCheckbox}
                checked={data.sendReminder}
              />
            </div>
          </div>
          <h4 className="title">Add Images (max of 20mb for each)</h4>
          <ImageButtonsArea>
            <ImageUploadButton id="image1" />
            <ImageUploadButton id="image2" />
            <ImageUploadButton id="image3" />
            <ImageUploadButton id="image4" />
            <ImageUploadButton id="image5" />
            <ImageUploadButton id="image6" />
          </ImageButtonsArea>
          <Button cancelbtn={false} text="Create Event" />
          <Button
            cancelbtn={true}
            text="Cancel"
            onClick={handleInputCancel}
          ></Button>
        </EventForm>
      </CreateEventLayout>
    </>
  );
};
const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  .multiple {
    display: flex;
  }
  .multiple-inputs {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .half {
      width: 45%;
    }
    h4.title {
      font-size: 12px;
    }
  }
  .checklist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ImageButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default CreateEvent;
