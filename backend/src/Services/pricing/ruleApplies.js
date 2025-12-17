function ruleApplies(rule, context) {
  const { conditionType, conditionValue } = rule;

  switch (conditionType) {

    case "TIME_RANGE": {
      const [start, end] = conditionValue.split("-");
      return (
        context.timeSlot.startTime >= start &&
        context.timeSlot.endTime <= end
      );
    }

    case "DAY_OF_WEEK": {
      const days = conditionValue.split(",");
      const day = new Date(context.bookingDate)
        .toLocaleString("en-US", { weekday: "short" })
        .toUpperCase();
      return days.includes(day);
    }

    case "COURT_TYPE": {
      return context.court.courtType === conditionValue;
    }

    default:
      return false;
  }
}
