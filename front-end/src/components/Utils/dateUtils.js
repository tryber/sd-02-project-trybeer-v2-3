const addZero = (value, comparison, sum) => {
  return value + sum < comparison ? `0${value + sum}` : value;
}

export const changeToUTF = (date) => {
  const createdDate = new Date(date);
  const day = addZero(createdDate.getDate(), 10, 0);
  const month = addZero(createdDate.getUTCMonth(), 10, 1);
  const hour = addZero(createdDate.getHours(), 10, 0);
  const minutes = addZero(createdDate.getMinutes(), 10, 0);
  const seconds = addZero(createdDate.getSeconds(), 10, 0);
  const dateAdjusted = `${day}/${month}/${new Date(date).getUTCFullYear()} - ${hour}:${minutes}:${seconds}`;
  return dateAdjusted;
}
