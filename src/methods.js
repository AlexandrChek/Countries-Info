export const handleError = (err, fetchType) => {
  const errMsgStart = `Error getting ${fetchType}:`;
  const alertMsgArr = [
    {
      fetchType: 'country list',
      msg: 'Temporary server problems. Please try again later.',
    },
    {
      fetchType: 'country info',
      msg: 'There is no information available about this country yet',
    },
  ];
  const { msg } = alertMsgArr.find(item => item.fetchType === fetchType);

  alert(msg);
  console.error(errMsgStart, err);
};
