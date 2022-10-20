import axios from "axios";

// const ENDPOINT_PROD = "http://localhost/dengue-monitor";
const ENDPOINT_PROD = "https://aklrosal-apis.herokuapp.com";

export const getCasesDB = setCases => {
  // fetch(ENDPOINT_PROD + "/retrieve.php")
  //   .then(response => response.json())
  //   .then(data => setCases(data))
  //   .catch(error => {
  //     // handle error
  //     console.log(error);
  //     setCases(null);
  //   });

  axios
    .get(ENDPOINT_PROD + "/retrieve.php")
    .then(response => {
      // handle success
      setCases(response.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
      setCases(null);
    })
    .then(() => {
      // always executed
    });
};

export const createCaseDB = (data, setError) => {
  let payload = "";
  Object.entries(data).forEach(d => {
    payload += d[0] + "=" + d[1] + "&";
  });
  payload = payload.trim("&");

  // fetch(
  //   ENDPOINT_PROD + "/create1.php?" + payload
  //   // , {
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json"
  //   //   },
  //   //   method: "POST",
  //   //   body: JSON.stringify(data)
  //   // }
  // )
  //   .then(function(res) {
  //     console.log(res);
  //     setError(false);
  //   })
  //   .catch(function(res) {
  //     console.log(res);
  //     setError(true);
  //   });

  axios
    .get(ENDPOINT_PROD + "/create.php?" + payload)
    .then(function(response) {
      setError(false);
    })
    .catch(function(error) {
      console.log(error);
      setError(true);
    });
};

export const formatDate = rawDate => {
  return new Date(rawDate).toLocaleDateString(
    {},
    {
      timeZone: "Asia/Manila",
      month: "long",
      day: "2-digit",
      year: "numeric"
    }
  );
};

export const getCurrentDate = () => {
  return new Date().toLocaleDateString(
    {},
    {
      timeZone: "Asia/Manila",
      month: "long",
      day: "2-digit",
      year: "numeric"
    }
  );
};

function getMonthDifference(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function getYearDifference(birthDate, today) {
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageYears--;
  }

  return ageYears;
}

function getDayDifference(birthdate, today) {
  const diffTime = Math.abs(today - birthdate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export const getBirthdateConvert = (currentDate, dateString) => {
  const today = new Date(currentDate);
  const birthDate = new Date(dateString);

  const ageYears = getYearDifference(birthDate, today);
  const ageMons = getMonthDifference(birthDate, today);
  const ageDays = getDayDifference(birthDate, today);

  return { ageYears, ageMons, ageDays };
};

export const formatDateDB = htmlDate => {
  const date = htmlDate.split("-");
  return date[1] + "/" + date[2] + "/" + date[0].substring(2, 4);
};
