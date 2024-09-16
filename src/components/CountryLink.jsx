import { Link } from 'react-router-dom';
import styles from '../styles/components/CountryLink.module.css';

const CountryLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} className={styles.country}>
      {children}
    </Link>
  );
};

export default CountryLink;
