import OrderModel from "../models/order.model";

import { IOrder } from "./../interfaces/order.interface";

export default class OrdersService {
    private Order = OrderModel;
    public async getOrdersByUser(id: string): Promise<IOrder[]> {
        return await this.Order.find({userId: id});
    }
    public async createOrder(order: IOrder): Promise<void> {
        await this.Order.create(order);
    }
}
