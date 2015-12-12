#Interval-expression

###A simple Node module to get date intervals from time expressions
--

## Installation

```sh
npm install interval-expression --save
```

## Usage

	var intervals = require("interval-expression")();

	var thisweek = intervals.thisweek();

	console.log(thisweek.startDate + " - " + thisweek.endDate);

All methods return output object[starDate, endDate] 

	=>(Fri Dec 7 2015 23:17:23 GMT-0500 (COT) - Fri Dec 13 2015 23:17:23 GMT-0500 (COT))

## Methods 
	
	intervals.today();
	intervals.yesterday();
	intervals.thisweek();
	intervals.lastweek();
	intervals.thismonth();
	intervals.lastmonth();
	intervals.thisyear();



