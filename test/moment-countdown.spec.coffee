moment = require?("moment") ? @moment
countdown = require?("countdown") ? @countdown
require?('../../bin/moment-countdown')

assertEqual = (a, b) -> throw new Error("Found #{b}, expected #{a}") unless a == b

describe "moment.countdown()", ->
  start = moment "1982 5 25", "YYYY MM DD"
  end = "1990-10-14T00:00:15-04:00"

  it "returns a default countdown with no options", ->
    assertEqual "8 years, 4 months, 20 days, 5 hours and 15 seconds", start.countdown(end).toString()

  it "returns a specific format when options are provided", ->
    assertEqual "100 months, 29100 minutes and 15 seconds", start.countdown(end, countdown.MONTHS | countdown.MINUTES | countdown.SECONDS, NaN, 1).toString()
    assertEqual "100 months and 29100.25 minutes", start.countdown(end, countdown.MONTHS | countdown.MINUTES | countdown.SECONDS, 2, 2).toString()
