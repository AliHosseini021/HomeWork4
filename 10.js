function add_minutes(date = new Date(), min) {
    date.setMinutes( date.getMinutes() + min)
    return date
}