const date = new Date();
date.setHours(0, 0, 0, 0);
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}


 // Setting dates for the api call
 const oneMonthBack = new Date();
 oneMonthBack.setDate(oneMonthBack.getDate() - 30);

 const date1 = formatDate(oneMonthBack);
//  console.log(formatDate(oneMonthBack));

 const date2 = formatDate(new Date());
//  console.log(formatDate(new Date()));