import Coach from "../../model/coaches.model.js";

export const createCoach = async (req, res) => {
  const coach = await Coach.create(req.body);
  res.status(201).json(coach);
};

export const getCoaches = async (req, res) => {
  const coaches = await Coach.findAll();
  res.json(coaches);
};

export const updateCoach = async (req, res) => {
  const coach = await Coach.findByPk(req.params.id);
  await coach.update(req.body);
  res.json(coach);
};

export const disableCoach = async (req, res) => {
  const coach = await Coach.findByPk(req.params.id);
  coach.isActive = false;
  await coach.save();
  res.json(coach);
};
