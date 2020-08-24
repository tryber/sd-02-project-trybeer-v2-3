export const changePage = (setOpen, history, route) => {
  const { role } = JSON.parse(localStorage.getItem('user'));
  if (role !== 'admin') setOpen(false);
  history.push(route);
};

export const getCart = () => {
  const item = localStorage.getItem('cart');
  if (!item) return {};
  return JSON.parse(item);
};
