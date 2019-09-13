// Local Storage here:
export const setKeys = (carbsPU, glucosePU) => () => {
  localStorage.setItem("CarbsPU", carbsPU);
  localStorage.setItem("GlucosePU", glucosePU);
};
