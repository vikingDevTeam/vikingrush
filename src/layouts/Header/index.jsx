import {useEffect} from 'react'

import Logo from '../../data/data-layout/Header/data-Logo.js';
import MenuInfo from '../../data/data-layout/Header/data-MenuInfo.json';

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'


const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo} MenuInfo={MenuInfo} />

    </>
  );
}

export default Header;