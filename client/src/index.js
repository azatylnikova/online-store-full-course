import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';


const root = ReactDOM.createRoot(document.getElementById('root'));


export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL, 'yfgyt344ftf')
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>

    <App />
  </Context.Provider>
);


