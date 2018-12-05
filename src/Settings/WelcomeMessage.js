import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CryptoTRKR! Select from the list of Crypto Coins below that you would like to track.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );
};
