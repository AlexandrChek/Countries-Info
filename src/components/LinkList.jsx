import CountryLink from './CountryLink';

const LinkList = ({ countries, ...rest }) => {
  return (
    <ul {...rest}>
      {countries.map((country) => (
        <li key={country.countryCode} style={{ marginBottom: '2.5px' }}>
          <CountryLink to={`/country/${country.countryCode}`} state={country}>
            {country.name}
          </CountryLink>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
