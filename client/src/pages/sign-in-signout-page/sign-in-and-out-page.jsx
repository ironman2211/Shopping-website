import React from 'react';

import './sign-in-and-out-apge.style.scss';
import SignIN from '../../components/sign-in-component/sign-in-compo.jsx';
import LogIN from '../../components/log-in-component/log-in-compo.jsx';
const SignINandOUT = () => (
  <div className="sign-in-outpage">
    <div className="sign-in">
      <SignIN />
    </div>
    <div className="log-in">
      <LogIN />
    </div>
  </div>
);

export default SignINandOUT;
