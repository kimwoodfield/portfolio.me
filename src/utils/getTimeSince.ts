/**
 * @description Gets the time since a date
 * @param date a date (e.g. "2022-07-01")
 * @returns a string describing how long ago a date was (e.g. "over 1 year ago")
 */
export const getTimeSince = (date: Date) => {
    const pubDate = new Date(date);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let timeText = '';
    if (
        currentYear === pubDate.getFullYear() && 
        currentMonth === pubDate.getMonth() + 1
    ) {
      timeText += "less than a month ago";
    } else if (currentYear === pubDate.getFullYear()) {
      const monthDifference = currentMonth - (pubDate.getMonth() + 1);
      timeText += `over ${monthDifference} month${monthDifference > 1 ? "s" : ""} ago`;
    } else {
      const yearDifference = currentYear - pubDate.getFullYear();
      timeText += `over ${yearDifference} year${yearDifference > 1 ? "s" : ""} ago`;
    };

    return timeText;
}