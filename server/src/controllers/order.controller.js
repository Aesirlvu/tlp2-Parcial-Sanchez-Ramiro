import { createOrder, getOrders, getOrderById } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;

  const { coffee } = req.body;

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOneOrderId = (req, res) => {
  const order = getOneOrderById(id);

  res.status(200).json(order);
};

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  if (!orders) {
    return res
      .status(400)
      .json({ message: "No hay ninguna orden", status: "Error" });
  }

  console.log(orders);

  res.status(200).json(orders);
};
