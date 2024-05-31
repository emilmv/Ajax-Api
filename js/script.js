const submitButton = document.querySelector("#submit-button");

submitButton.onclick = async () => {
  const htmlCityName = document.querySelector("#city-name");
  const htmlTempCondition = document.querySelector("#temp-condition");
  htmlCityName.innerHTML = "";
  htmlTempCondition.innerHTML = "";
  const cityInput = document.querySelector("#cityInput");
  const URL = `https://api.weatherapi.com/v1/current.json?key=e7595968327c45ba814222632243105&q=${cityInput.value}`;
  const tempValue = document.querySelector("#temp-input");
  const hiddenMenu = document.querySelector(".hidden-result");
  const data = await axios.get(URL);
  const cityName = data.data.location.name;
  const countryName = data.data.location.country;
  const condition = data.data.current.condition.text;
  const farenheitValue = data.data.current.temp_f;
  const celciusValue = data.data.current.temp_c;
  htmlCityName.innerHTML = `${cityName}, ${countryName}`;
  if (tempValue.value === "1") {
    htmlTempCondition.innerHTML = `${farenheitValue}F, ${condition}`;
  } else {
    htmlTempCondition.innerHTML = `${celciusValue}°C, ${condition}`;
  }
hiddenMenu.classList.remove("d-none")
  console.log(data);
};
