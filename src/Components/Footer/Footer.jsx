import React from 'react'
import styles from './Footer.module.css' 
import Dogs from '../../Assets/dogs.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Dogs />
        <p>Dogs. Alguns direitos Reservados.</p>
    </footer>
  )
}

export default Footer
