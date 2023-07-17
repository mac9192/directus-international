import readingTime from "reading-time";
import { DateTime } from "luxon";

export const getReadingTime = (text: string, locale:string) => {
    const minute = readingTime(text).minutes;
    //Floor to 1 decimal place
    const minutesRounded = Math.floor(minute);
    if (locale === "es") {
        if(minutesRounded === 0){
            return `${minutesRounded} Minutos`
        }
        if(minutesRounded === 1){
            return `${minutesRounded} Minutos`
        }
        else{
            return `${minutesRounded} Minutos`
        }
    }else{
        if(minutesRounded === 0){
            return `${minutesRounded} Minutes`
        }
        if(minutesRounded === 1){
            return `${minutesRounded} Minute`
        }
        else{
            return `${minutesRounded} Minutes`
        }

    } 

}

export const getRelativeDate = (date: string, locale:string) => {
    return DateTime.fromISO(date).setLocale(locale).toRelative()
}

