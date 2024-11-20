// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Hotel Details App. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '1rem',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
  },
};

export default Footer;
