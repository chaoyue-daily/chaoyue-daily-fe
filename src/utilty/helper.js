export const getMonth = (month) => {
    return ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][month].toUpperCase()
}

export const getDate = (date) => {
    date = new Date(date);
    return date && date.getMonth()+1 +"/" + date.getDate() + "/" + date.getFullYear()
}