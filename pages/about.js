import React from 'react';
import Layout from '../components/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../action';

const AboutScreen = () => {
  // const count = useSelector(state => state);
  // console.log(count);
  // const dispatch = useDispatch();
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
};

export default AboutScreen;
