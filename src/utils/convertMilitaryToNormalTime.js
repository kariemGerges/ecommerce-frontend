export const convertMilitaryToNormalTime = (militaryTime) => {
    // Split the input string into hours and minutes
    const [hoursStr, minutes] = militaryTime.split(':');
    let hours = parseInt(hoursStr, 10);

    // Determine if it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert 0 hour or hours greater than 12 into 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Return the formatted time
    return `${hours}:${minutes} ${period}`;
};
