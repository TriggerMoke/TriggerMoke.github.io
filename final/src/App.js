import React from 'react';
import { useState } from "react";
import './App.css';
import ColorMixer from './components/ColorMixer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>1: ColorMixer</h1>
        {ColorMixer()}
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>Important Note: </h1>
        <p>It has been a rough end to this semester so i restarted this project like 17 times. As a result of not being able to figure react out i don't really have much to show. I am really at your mercy now, i would appreciate not failing the class....  My final plan after restarting was to have 5 components that were unique and that could be unit tested fairly easily but i have already restarted so many times and i just can't do it anymore... my brain is just so fried :( i am sorry</p>
        <p>I don't even know why i couldn't figure this one out, nothing would work for me</p>
      </header>
    </div>
  );
}

export default App;
