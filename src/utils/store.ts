export const listToMap = (arr, key = 'id', mapper = (obj) => obj) =>
  arr.reduce((acc, curr) => {
    acc[curr[key]] = mapper(curr);
    return acc;
  }, {});
