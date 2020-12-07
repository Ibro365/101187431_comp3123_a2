import {Months, Weekdays } from './date_texts'

const date = new Date();
export const Month =  Months[date.getMonth()];
export const Weekday = Weekdays[date.getDay()];
export const Day = date.getDate();