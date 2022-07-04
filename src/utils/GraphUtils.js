// import ARIMA from "arima";

export const getYears = () => {
  const caseObject = {};
  const d = new Date();
  // set present year to 2022 if local date is not set correctly
  const todayYear = d.getFullYear() < 2022 ? 2022 : d.getFullYear();

  // get all years from 2014 up to the present year
  for (let i = 2014; i <= todayYear; i++) {
    i = i.toString();
    caseObject[i] = 0;
  }

  return caseObject;
};

export const getAnnualCases = dengueData => {
  const annualCases = getYears();

  // get number of cases per year in all muncities
  for (const d of dengueData) {
    if (annualCases[d.Year]) {
      annualCases[d.Year] += 1;
    } else {
      annualCases[d.Year] = 1;
    }
  }

  return annualCases;
};

export const getAnnualCasesOfMuncity = (muncity, dengueData) => {
  const annualCasesMuncity = getYears();

  // get number of cases per year in a specified muncity
  for (const d of dengueData) {
    if (annualCasesMuncity[d.Year] && d.Muncity === muncity) {
      annualCasesMuncity[d.Year] += 1;
    } else if (d.Muncity === muncity) {
      annualCasesMuncity[d.Year] = 1;
    }
  }

  return annualCasesMuncity;
};

export const getMonthlyCases = (muncity, year, dengueData) => {
  const monthlyCases = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0
  };
  const monthNames = Object.keys(monthlyCases);

  // get number of cases per month in a specified year
  for (const d of dengueData) {
    const date = new Date(d.DAdmit);
    const monthName = monthNames[date.getMonth()];
    if (monthlyCases[monthName] && d.Muncity === muncity && d.Year === year) {
      monthlyCases[monthName] += 1;
    } else if (d.Muncity === muncity && d.Year === year) {
      monthlyCases[monthName] = 1;
    }
  }

  return monthlyCases;
};

// export const forecastCases = () => {
//   // Synthesize timeseries
//   const ts = Array(24)
//     .fill(0)
//     .map((_, i) => i + Math.random() / 5);

//   // Init arima and start training
//   const arima = new ARIMA({
//     p: 2,
//     d: 1,
//     q: 2,
//     verbose: false
//   }).train(ts);

//   // Predict next 12 values
//   const [pred, errors] = arima.predict(12);

//   return { pred, errors };
// };
