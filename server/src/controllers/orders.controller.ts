import { Request, Response } from "express";

import { IOrder } from './../interfaces/order.interface';
import OrdersService from "../services/orders.service";

export default class OrdersController {
   private ordersService = new OrdersService();
   public getUserOrders = async (req: Request, res: Response) => {
       const { id } = req.params;
       const orders = await this.ordersService.getOrdersByUser(id);

       res.json(orders);
   }
   public createOrder = async (req: Request, res: Response) => {
       const order: IOrder = req.body;

       await this.ordersService.createOrder(order);

       res.end();
   }
}
