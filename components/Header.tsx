// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 className="text-2xl font-bold">Hotel Details App</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/hotels" style={styles.link}>Hotels</a></li>
          <li><a href="/about" style={styles.link}>About</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textAlign: 'center',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Header;
