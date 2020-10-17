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
import { useHistory } from 'react-router';

const CreateEvent = () => {
  const initialState = {
    name: '',
    description: '',
    location: 'online',
    event_date: '',
    event_time: '',
    end_date: '',
    eventStatus: 'Public',
    meta: {
      how_we_met: '',
      cashgifts: false,
      reminder: false,
    },
    hashtag: '',
  };
  const [data, setData] = useState(initialState);
  const [eventURL, setEventURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
      end_date: '',
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

    if (new Date(data.event_date) > new Date(data.end_date)) {
      toaster.notify('End date must be ahead of start date', {
        position: 'top',
        duration: 5000,
      });
      return;
    }

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
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          const eventID = response.data.id;
          setEventURL(
            `${process.env.REACT_APP_APP_LINK}/event/detail/${eventID}`,
          );
          toaster.notify(response.message, {
            position: 'top',
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
          position: 'top',
          duration: 5000,
        });
      });
  };

  const handleCloseModal = () => {
    setModalState({ type: null, show: false, message: null });
    history.push('/owner/events');
  };

  const handleRadioSelect = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    e.persist();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    if (e.target.files[0].size > 500000) {
      toaster.notify('Image size must not be above 500kb', {
        duration: 5000,
        position: 'top',
      });
      return;
    }

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
          <FormTextarea
            name="how_we_met"
            value={data.how_we_met}
            onChange={handleInputChange}
            required
            label="How did the couple meet? (Optional)"
          />
          <div className="multiple-inputs">
            <DateInput
              className="half"
              name="event_date"
              label="Start Date"
              placeholder="Date"
              value={data.event_date}
              onChange={handleInputChange}
            />
            <DateInput
              className="half"
              name="end_date"
              label="End Date"
              placeholder="Date"
              value={data.end_date}
              onChange={handleInputChange}
            />
          </div>
          <TimeInput
            className="half"
            name="event_time"
            label="Time"
            value={data.event_time}
            onChange={handleInputChange}
          />
          <h4 className="tittle">Event Type</h4>
          <div className="radio-area multiple">
            <RadioButton
              name="eventStatus"
              label="Private"
              value="private"
              onSelect={handleRadioSelect}
            />
            <RadioButton
              name="eventStatus"
              label="Public"
              value="public"
              onSelect={handleRadioSelect}
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
          <h4 className="title">Add Images (max of 500kb for each)</h4>
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
          <Button cancelbtn={false} text={'Create Event'} loading={loading} />
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
