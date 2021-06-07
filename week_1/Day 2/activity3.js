// Create a program that calculate the number of days from today to your birth date.
// Use Date Object
// The Date is express as a Number or String.
// The Date Object Consists of Multiple Methods.
// 0 Time = January 1, 1970 at 00:00:00

let birthDay = new Date("October 14,1988"),

// new Date() creates a new date object with the current date and time:
    today = new Date(),
    diff = 0,
    days = 1000*60*60*24;

diff = today - birthDay;
console.log(Math.floor(diff/days)+ " days have passed since my birth date.");