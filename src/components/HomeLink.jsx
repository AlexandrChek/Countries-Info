import { Link } from 'react-router-dom';
import styles from '../styles/components/HomeLink.module.css';

const HomeLink = () => {
  return (
    <Link to="/" className={styles.homeLink}>
      Home
    </Link>
  );
};

export default HomeLink;
