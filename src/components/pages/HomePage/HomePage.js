import React from 'react';
import styles from './HomePage.module.css';

const { wrapper, title } = styles;

const HomePage = () => (
  <div className={wrapper}>
    <h1 className={title}>Wellcome to Paws online store</h1>
  </div>
);
export default HomePage;
