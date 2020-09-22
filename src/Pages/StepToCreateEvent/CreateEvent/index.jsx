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
import { postCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import toaster from 'toasted-notes';
import cookie from 'js-cookie';

const CreateEvent = () => {
  const initialState = {
    name: '',
    description: '',
    location: 'online',
    event_date: '',
    event_time: '',
    meta: {
      cashgifts: false,
      reminder: false,
    },
    hashtag: '',
  };
  const [data, setData] = useState(initialState);
  const [eventURL, setEventURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalState, setModalState] = useState({
    show: false,
    message: null,
    type: null,
  });
  const [imageData, setImageData] = useState({
    image1: { result: null, file: null },
    image2: { result: null, file: null },
    image3: { result: null, file: null },
    image4: { result: null, file: null },
    image5: { result: null, file: null },
    image6: { result: null, file: null },
  });

  const handleInputChange = (event) => {
    if (event.target.type === 'checkbox') {
      setData({
        ...data,
        meta: {
          ...data.meta,
          [event.target.name]: event.target.checked.toString(),
        },
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleInputCancel = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [initialState]: '',
    });
  };

  const resetFormState = () => {
    setData({
      name: '',
      description: '',
      location: 'online',
      event_date: '',
      event_time: '',
      meta: {
        cashgifts: false,
        reminder: false,
      },
      hashtag: '',
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();

    for (let i in data) {
      formData.append(i, data[i]);
    }

    for (let image in imageData) {
      if (!imageData[image].file) {
        continue;
      }
      formData.append('imageUpload', imageData[image].file);
    }

    postCall(api.createEvent, formData, {
      user_id: cookie.get('auid'),
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          const eventID = response.data.id;
          setEventURL(
            `${process.env.REACT_APP_APP_LINK}/dashboard/event/detail/${eventID}`,
          );
          toaster.notify(response.message, {
            position: 'bottom',
            duration: 5000,
          });
          setModalState({
            type: 'success',
            show: true,
            message: 'Successfully created account',
          });
          resetFormState();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toaster.notify(error.message, {
          position: 'bottom',
          duration: 5000,
        });
      });
  };

  const handleCloseModal = () => {
    setModalState({ type: null, show: false, message: null });
  };

  const handleRadioSelect = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    e.persist();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setImageData((prevState) => ({
        ...prevState,
        [e.target.name]: { file: e.target.files[0], result: reader.result },
      }));
    };
  };

  return (
    <>
      {modalState.show ? (
        <FormAlert
          type={modalState.type}
          message={modalState.message}
          closeModal={handleCloseModal}
          link={eventURL}
        />
      ) : null}
      <CreateEventLayout>
        <EventForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            required={true}
            label="Event Name"
          />
          <FormInput
            type="text"
            name="hashtag"
            value={data.hashtag}
            onChange={handleInputChange}
            required={true}
            label="Event #hashtag"
          />
          <FormTextarea
            name="description"
            value={data.description}
            onChange={handleInputChange}
            required
            label="Event description"
          />
          <div className="multiple-inputs">
            <DateInput
              className="half"
              name="event_date"
              label="Date"
              placeholder="Date"
              value={data.event_date}
              onChange={handleInputChange}
            />
            <TimeInput
              className="half"
              name="event_time"
              value={data.event_time}
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
            name="location"
            value={data.location}
            onChange={handleInputChange}
            required={true}
            placeholder="Event venue location"
          />
          <h4 className="title">Advance</h4>
          <div className="multiple-checked">
            <div className="checklist">
              <span>Enable cash gifts</span>
              <CheckBox
                name="cashgifts"
                onChange={handleInputChange}
                checked={data.meta.cashgifts}
              />
            </div>
            <div className="checklist">
              <span>Enable send event reminder</span>
              <CheckBox
                name="reminder"
                onChange={handleInputChange}
                checked={data.meta.reminder}
              />
            </div>
          </div>
          <h4 className="title">Add Images (max of 20mb for each)</h4>
          <ImageButtonsArea>
            <ImageUploadButton
              id="image1"
              name="image1"
              onChange={handleImageUpload}
              previewSrc={imageData.image1.result}
            />
            <ImageUploadButton
              id="image2"
              name="image2"
              onChange={handleImageUpload}
              previewSrc={imageData.image2.result}
            />
            <ImageUploadButton
              id="image3"
              name="image3"
              onChange={handleImageUpload}
              previewSrc={imageData.image3.result}
            />
            <ImageUploadButton
              id="image4"
              name="image4"
              onChange={handleImageUpload}
              previewSrc={imageData.image4.result}
            />
            <ImageUploadButton
              id="image5"
              name="image5"
              onChange={handleImageUpload}
              previewSrc={imageData.image5.result}
            />
            <ImageUploadButton
              id="image6"
              name="image6"
              onChange={handleImageUpload}
              previewSrc={imageData.image6.result}
            />
          </ImageButtonsArea>
          <Button
            cancelbtn={false}
            text={loading ? 'Creating your event!...' : 'Create Event'}
            loading={true}
          />
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
