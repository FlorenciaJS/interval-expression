/*!
 * interval-expression
 * Autor <yeison@noders.co>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var moment = require('moment');

/**
 * Expose intervals client
 */

module.exports = intervals;

function intervals() {
    if (!(this instanceof intervals)) return new intervals();
    return this;
}

  intervals.prototype.today = function() {
      var today= new Date();
      return ({'startDate':today, 'endDate':today});
  };

 intervals.prototype.yesterday = function(){
        var yesterday = moment().startOf('days').subtract(1, 'days')._d;
        return ({'startDate':yesterday, 'endDate': yesterday});
    }

    intervals.prototype.thisweek = function(){
        var initThisWeek = moment().day("Monday")._d;
        var endThisWeek=moment().isoWeekday(7)._d;
        return ({'startDate':initThisWeek, 'endDate': endThisWeek});
    }

    intervals.prototype.lastweek = function(){
        var initLastWeek = moment().weekday(-6)._d; 
        var endLastWeek = moment().startOf('week')._d; 
        return ({'startDate':initLastWeek, 'endDate': endLastWeek});
    }

    intervals.prototype.thismonth = function(){
        var initThisMonth =moment().startOf('month')._d; 
        var endThisMonth =moment().endOf('month').subtract(1, 'days')._d;
        return ({'startDate':initThisMonth, 'endDate': endThisMonth});
    }

    intervals.prototype.lastmonth = function(){
        var initLastMonth  = moment().startOf('month').subtract(1, 'month')._d;
        var endLastMonth = moment().endOf('month').subtract(1, 'month').subtract(1, 'days')._d;
        return ({'startDate': initLastMonth, 'endDate': endLastMonth});
    }

    intervals.prototype.thisyear = function(){
        var initThisYear =moment().startOf('year')._d; 
        var endThisYear=moment().endOf('year')._d; 
        return ({'startDate':initThisYear, 'endDate': endThisYear});
    }