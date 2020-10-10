import React, { useCallback, useEffect, useState } from 'react';
import Styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiCardsHeart, mdiAccountGroup, mdiBullseye } from '@mdi/js';
import { useAppContext } from '../../../Context/AppContext';
// import { useVideoCallContext } from '../../../Context/VideoCallContext';
import {
  getCall,
  postCall,
  postCallTransactions,
} from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import cookie from 'js-cookie';
import toast from 'toasted-notes';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import toaster from 'toasted-notes';

function EventOptions({ wallet, updateWallet }) {
  const { denom } = useAppContext();
  const [attendee, setAttendees] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const [showLikeBubbles, setShowLikeBubbles] = useState(false);
  const {
    showAttendees,
    handleShowAttendees,
    handleShowYoutube,
    handleSprayEffect,
    showYoutube,
    handleFundWallet,
  } = useVideoCallContext();

  useEffect(() => {
    getCall(api.getEventLikeCount(cookie.get('eid')), {})
      .then((response) => {
        setLikeCount(response.all_likes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [liked]);

  useEffect(() => {
    setInterval(() => {
      getCall(api.getEventAttendee(cookie.get('eid')))
        .then((response) => {
          if (response.status === 200) {
            setAttendees(response.attendee.length);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 30000);
  }, []);

  const charge = useCallback(() => {
    handleSprayEffect(false);
    if (wallet < +denom) {
      return;
    }

    const event = JSON.parse(window.localStorage.getItem('event'));
    postCallTransactions(
      api.instantCharge,
      {
        amount: tapCount * denom * 100,
        clientId: process.env.REACT_APP_PAYMENT_CLIENT_ID,
        productId: event.product_id,
        userId: cookie.get('auid'),
      },
      {},
    )
      .then((response) => {
        if (response.status) {
          postCallTransactions(
            api.sprayLogs,
            {
              transaction_ref: response.reference,
              amount: tapCount * denom,
            },
            { user_id: cookie.get('auid'), event_id: event.id },
          )
            .then((response) => {})
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        toast.notify(error.message, { position: 'top', duration: 5000 });
      });
  }, [denom, tapCount, wallet, handleSprayEffect]);

  useEffect(() => {
    const debounceReq = setTimeout(() => {
      if (tapCount > 0) {
        charge();
      }
    }, 3000);

    return () => clearTimeout(debounceReq);
  }, [tapCount]);

  function handleLikeEvent(e) {
    setLiked(true);
    setShowLikeBubbles(true);

    setTimeout(() => {
      setShowLikeBubbles(false);
    }, 4000);

    const target = e.target;

    target.classList.add('heartbeat');

    postCall(api.postEventLike, {}, { event_id: cookie.get('eid') })
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            setShowLikeBubbles(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sprayCash() {
    handleSprayEffect(true);
    if (wallet < +denom) {
      handleSprayEffect(false);
      handleFundWallet(true);
      toaster.notify('Kindly fund your wallet', {
        position: 'bottom',
        duration: 5000,
      });
      return;
    }
    setTapCount((prev) => prev + 1);
    const amount = wallet - +denom;
    updateWallet(amount);
  }

  function at() {
    const embed = window.localStorage.getItem('embed');
    if (embed) {
      if (showAttendees) {
        handleShowYoutube(true);
        handleShowAttendees(false);
      } else {
        handleShowYoutube(false);
        handleShowAttendees(true);
      }
    } else {
      handleShowAttendees(true);
      handleShowYoutube(false);
    }
  }
  return (
    <OptionsWrapper>
      <OptionItems>
        {/* <SingleOption onClick={showTablesHandler}>
          <Icon path={mdiBullseye} size={1} color="#fff" />
          <span>Join Table</span>
        </SingleOption> */}
        {/* <SingleOption>
          <Icon path={mdiRadioboxMarked} size={0.8} color="#fff" />
          <span>Record</span>
        </SingleOption> */}
        {showYoutube ? (
          <SingleOption onClick={at}>
            <Icon path={mdiAccountGroup} size={1} color="#fff" />
            <span>{attendee}</span>
            <span>Attendees</span>
          </SingleOption>
        ) : (
          <SingleOption onClick={at}>
            <Icon path={mdiBullseye} size={1} color="#fff" />
            <span>{attendee}</span>
            <span>Stream</span>
          </SingleOption>
        )}
        <SingleOption onClick={handleLikeEvent}>
          <Icon
            path={mdiCardsHeart}
            size={0.8}
            color={!liked ? '#fff' : '#dd0d0d'}
            style={{ rotate: 'y 180deg' }}
          />
          {showLikeBubbles ? (
            <img
              src="/assets/images/icons/heartbubble.gif"
              alt="Like"
              className="likebubble"
            />
          ) : null}
          <span>{likeCount}</span>
        </SingleOption>
        {/* <SingleOption>
          <CommentNotification />
          <Icon
            path={mdiMessageReply}
            size={0.8}
            color="#fff"
            style={{ rotate: 'y 180deg' }}
          />
          <span>2.6k</span>
        </SingleOption> */}
        <SingleOption onClick={sprayCash} id="spray">
          <img src="/assets/images/icons/cashspray.svg" alt="cash" />
          <span>
            Spray{' '}
            {denom || parseInt(window.localStorage.getItem('denom')) || 200}
          </span>
        </SingleOption>
        {/* <SingleOption id="spray" onClick={handleSprayState}>
          <span className="denom">
            {denom || parseInt(window.localStorage.getItem('denom')) || 200}
          </span>
          <span>Change Denomination</span>
        </SingleOption> */}
      </OptionItems>
    </OptionsWrapper>
  );
}

const OptionsWrapper = Styled.nav`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 70px;
  z-index: 999999;
  background: rgba(40, 193, 1, 0.5);
  padding: 5px 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const OptionItems = Styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const SingleOption = Styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
  img, svg {
    align-self: center;
    margin-bottom: 7px;
    svg.flip {
      transform: rotateY(180deg);
    }
  }
  img.likebubble {
    width: 6rem;
    position: absolute;
    top: -97%;
  }
  span {
    font-size: 10px;
    color: #fff;
    font-weight: 800;
    text-align: center;
    width: 100%;
  }
  span.denom {
    font-size: 1rem;
  }
  .heartbeat {
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
  }
  /* ----------------------------------------------
  * Generated by Animista on 2020-10-6 0:39:48
  * Licensed under FreeBSD License.
  * See http://animista.net/license for more info. 
  * w: http://animista.net, t: @cssanimista
  * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation heartbeat
   * ----------------------------------------
   */
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
`;

// const CommentNotification = Styled.div`
//   width: 7px;
//   height: 7px;
//   background: ${Colors.defaultGreen};
//   border-radius: 50%;
//   position: absolute;
//   right: 0;
//   top: -3.5px;
// `;

export default EventOptions;
