// Local Storage here:
export const setKeys = () => {
  const carbsPU = document.querySelector("#inputCarbsPU").value;
  const glucosePU = document.querySelector("#inputGlucosePU").value;

  localStorage.setItem("CarbsPU", carbsPU);
  localStorage.setItem("GlucosePU", glucosePU);
};
