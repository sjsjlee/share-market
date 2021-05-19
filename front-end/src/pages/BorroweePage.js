import React from 'react';
import Renting from '../components/mypage/Renting';
import Mypost from '../components/mypage/Mypost';
import Reservation from '../components/mypage/Reservation';
import Navigation from 'components/mypage/Navigation';


const BorroweePage = () => {
  return (
    <>
    <Navigation/>
    <Renting/>
    <Reservation/>
    <Mypost/>
    </>
  );
};

export default BorroweePage;