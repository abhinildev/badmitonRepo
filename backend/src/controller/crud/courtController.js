import Court from "../../model/courts.model.js";

export const createCourt = async (req, res) => {
  const court = await Court.create(req.body);
  res.status(201).json(court);
};

export const getCourts = async (req, res) => {
  const courts = await Court.findAll();
  res.json(courts);
};

export const updateCourt = async (req, res) => {
  const court = await Court.findByPk(req.params.id);
  if (!court) return res.status(404).json({ message: "Court not found" });

  await court.update(req.body);
  res.json(court);
};

export const disableCourt = async (req, res) => {
  const court = await Court.findByPk(req.params.id);
  court.isActive = false;
  await court.save();
  res.json(court);
};
