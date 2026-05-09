import { test, expect, request, Page } from '@playwright/test';
import { apitestutilis } from './apiutilis/apitestutilis';

const loginPayload = {
    "userEmail": "test9998@yopmail.com",
    "userPassword": "Test@123"
};

const orderPayLoad = {
    orders: [
        {
            country: "Cuba",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};

interface ApiResponse {
    token: string;
    orderId: string;
}

let response: ApiResponse;

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const apiUtils = new apitestutilis(apiContext, loginPayload);

    response = await apiUtils.createOrder(orderPayLoad);

});

// create order is success
test('@API Place the order', async ({ page }: { page: Page }) => {

    await page.addInitScript((value: string) => {

        window.localStorage.setItem('token', value);

    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();

    const rows = page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); ++i) {

        const rowOrderId = await rows.nth(i).locator("th").textContent();

        if (rowOrderId && response.orderId.includes(rowOrderId)) {

            await rows.nth(i).locator("button").first().click();

            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();

    expect(
        response.orderId.includes(orderIdDetails ?? "")
    ).toBeTruthy();

});