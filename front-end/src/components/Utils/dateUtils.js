const addZero = (value, comparison, sum) => {
  return value + sum < comparison ? `0${value + sum}` : value;
}

export const changeToUTF = (date) => {
  const createdDate = new Date(date);
  const day = addZero(createdDate.getDay(), 10, 0);
  const month = addZero(createdDate.getUTCMonth(), 10, 1);
  const hour = createdDate.getHours();
  const minutes = addZero(createdDate.getMinutes(), 10, 0);
  const seconds = createdDate.getSeconds();
  const dateAdjusted = `${day}/${month}/${new Date(date).getUTCFullYear()} - ${hour}:${minutes}:${seconds}`;
  return dateAdjusted;
}
