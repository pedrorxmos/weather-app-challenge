export const transformDate = (str) => {
  let date;
  
  if(str === "") {
    date = new Date();
  } else {
    date = new Date(str);
  }

  const num = date.getDate();
  const month = date.getMonth();
  const day = date.getDay();

  

  const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', ' Thursday', 'Friday', 'Saturday'];

  return `${week[day].slice(0, 3)}. ${num} ${year[month].slice(0, 3)}`;
}