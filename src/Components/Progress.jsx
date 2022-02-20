import React from "react";
import { Link } from 'react-router-dom';
import { ProBar, Vida, Close, Bar, VidaRes } from "../styles/QuestionStyle";
import LinearProgress from '@mui/material/LinearProgress';

const Progress = () => {
  return (
    <ProBar>
      <Close as={Link} to="/categories" width="24" height="24" alt="back" src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891970/Sprint%202/icons%20/Property_1_x_twdni3.svg" />
      <LinearProgress variant="determinate" value={25} />
      <Vida src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644891972/Sprint%202/icons%20/Property_1_heart_fbrb3e.svg" />
      <VidaRes>4</VidaRes>
    </ProBar>
  );
};

export default Progress;
