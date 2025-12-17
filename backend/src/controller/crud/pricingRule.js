import PricingRule from "../../model/pricingRules.js";

export const createRule = async (req, res) => {
  const rule = await PricingRule.create(req.body);
  res.status(201).json(rule);
};

export const getRules = async (req, res) => {
  const rules = await PricingRule.findAll();
  res.json(rules);
};

export const updateRule = async (req, res) => {
  const rule = await PricingRule.findByPk(req.params.id);
  await rule.update(req.body);
  res.json(rule);
};

export const toggleRule = async (req, res) => {
  const rule = await PricingRule.findByPk(req.params.id);
  rule.isActive = !rule.isActive;
  await rule.save();
  res.json(rule);
};
