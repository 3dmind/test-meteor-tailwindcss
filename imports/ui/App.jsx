import React from 'react';
import { Hello } from './Hello.jsx';
import { InfoContainer } from './InfoContainer';
import { Input } from './Input';

export function App() {
  return (
    <div className={'3dmind-container 3dmind-mx-auto'}>
      <h1
        className={'3dmind-font-sans 3dmind-text-3xl 3dmind-font-bold 3dmind-mb-3'}>
        Welcome to Meteor!
      </h1>
      <Input />
      <div className={'3dmind-flex 3dmind-flex-wrap'}>
        <Hello />
        <InfoContainer />
      </div>
    </div>
  );
}
