import { validationResult } from "express-validator";

export const applyValidations = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  } catch (error) {}

  next();
};
