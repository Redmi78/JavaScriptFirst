import { APIRequestContext } from '@playwright/test';

interface LoginPayload {
    userEmail: string;
    userPassword: string;
}

interface OrderPayload {
    orders: {
        country: string;
        productOrderedId: string;
    }[];
}

interface CreateOrderResponse {
    token: string;
    orderId: string;
}

export class apitest {
    private apiContext: APIRequestContext;
    private loginPayLoad: LoginPayload;

    constructor(apiContext: APIRequestContext, loginPayLoad: LoginPayload) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken(): Promise<string> {
        const loginResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            }
        );

        const loginResponseJson = await loginResponse.json();

        const token: string = loginResponseJson.token;

        console.log(token);

        return token;
    }

    async createOrder(orderPayLoad: OrderPayload): Promise<CreateOrderResponse> {

        const response: CreateOrderResponse = {
            token: await this.getToken(),
            orderId: ""
        };

        const orderResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    Authorization: response.token,
                    'Content-Type': 'application/json'
                }
            }
        );

        const orderResponseJson = await orderResponse.json();

        console.log(orderResponseJson);

        response.orderId = orderResponseJson.orders[0];

        return response;
    }
}