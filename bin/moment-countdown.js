// Generated by CoffeeScript 1.6.2
(function() {
  var Twix, countdown, e, moment,
    __slice = [].slice;

  if (typeof require !== "undefined" && require !== null) {
    countdown = require('countdown');
    moment = require('moment');
    Twix = (function() {
      try {
        return require('twix');
      } catch (_error) {
        e = _error;
        return null;
      }
    })();
  } else {
    countdown = this.countdown;
    moment = this.moment;
    Twix = this.Twix;
  }

  moment.fn.countdown = function() {
    var args, other;

    other = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return countdown.apply(null, [this.toDate(), moment(other).toDate()].concat(__slice.call(args)));
  };

  if (Twix) {
    Twix.prototype.countdown = function() {
      return countdown.apply(null, [this._trueStart(), this._trueEnd()].concat(__slice.call(arguments)));
    };
  }

}).call(this);