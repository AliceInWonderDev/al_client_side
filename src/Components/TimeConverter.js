
const TimeConverter = ({response}) => {
    let newDate = new Date(response.time * 1000); //por mil para que sea en segundos y no milisegundos
    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = newDate.getFullYear(); //returns 4 numbers (numbers of the year -of course-)
    let month = allMonths[newDate.getMonth()];
    let date = newDate.getDate();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min;
    
    return time;
}

export default TimeConverter;
