function applyModifier(rule, basePrice) {
  if (rule.modifierType === "PERCENTAGE") {
    return (basePrice * rule.modifierValue) / 100;
  }

  if (rule.modifierType === "FLAT") {
    return rule.modifierValue;
  }

  return 0;
}
