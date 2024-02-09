//Exercise #1
// Formula = W * L
const rectangleLength = 5; // Length
const rectangleWidth = 3;   // Width

const rectangleArea = rectangleLength * rectangleWidth
console.log(rectangleArea);

//Exercise #2
// Formula = (W + L) * 2
const PerimeterRectangleLength = 5; // Length

const PerimeterRectangleWidth = 3; // Width

const PerimeterRectangle = (PerimeterRectangleLength + PerimeterRectangleWidth) * 2;

console.log(PerimeterRectangle);

//Exercise #3
// Diameter, Formula = R * 2
const circleRadius = 5; // Radius

const circleDiameter = circleRadius * 2;

console.log(circleDiameter);
// Circumference, Formula = 2 * 3.14159(Pi) * Radius

const circleCircumference = 2 * 3.14159 * circleRadius;

console.log(circleCircumference);
// Area, Formula = 3.14159(Pi) * Radius ** 2

const circleArea = 3.14159 * circleRadius ** 2;

console.log(circleArea);

//Exercise #4
//Triangle's angle formula = 180 - (Angle A + B)

const triangleA = 80; // known angle A

const triangleB = 65; // known angle B

const triangleC = 180 - (triangleA + triangleB);

console.log(triangleC);

//Exercise #5

const date1 = new Date ("2022-01-20"); // known date 1

const date2 = new Date ("2022-01-22"); // known date 2

const dateDiff = (date2 - date1) /  (24 * 3600 * 1000)  
// Finding the difference in days formula = (known date 2 - known date 1) / (24 hours * 3600 seconds * 1000 miliseconds)

console.log(dateDiff);

//Exercise #6

//a) 400 days
const  years = (400 / 365); // 400 days / days in a year (365)
console.log(years);
const roundedYears = Math.round (years);
console.log(roundedYears);

const months = ((400 % 365) /30); // 400 days % days in a year (365) / days in a month (30)
console.log(months);
const roundedMonth = Math.round(months)
console.log(roundedMonth);

const days = ((400 - 365) % 30) //(400 days - days in a year) % days in a month
console.log(days);

//b) 366 days
const years2 = (366 / 365);
console.log(years2);
const roundedYears2 = Math.round (years2);
console.log(roundedYears2);

const months2 = ((366 % 365) / 30)
console.log(months2);
const roundedMonth2 = Math.round (months2)
console.log(roundedMonth2);

const days2 = ((366 - 365) % 30)
console.log(days2);
