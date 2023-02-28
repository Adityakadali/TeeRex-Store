export const filterItems = (data, item) => {
  let items = [];
  data.forEach((element) => {
    if (!items.includes(element[`${item}`])) {
      items.push(element[`${item}`]);
    }
  });
  return items;
};
