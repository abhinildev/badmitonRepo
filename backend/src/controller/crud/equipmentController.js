import Equipment from "../../model/equipment.model.js";

export const createEquipment = async (req, res) => {
  const equipment = await Equipment.create(req.body);
  res.status(201).json(equipment);
};

export const getEquipment = async (req, res) => {
  const equipment = await Equipment.findAll();
  res.json(equipment);
};

export const updateEquipment = async (req, res) => {
  const equipment = await Equipment.findByPk(req.params.id);
  await equipment.update(req.body);
  res.json(equipment);
};
