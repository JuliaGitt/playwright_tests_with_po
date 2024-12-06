import { expect } from '@playwright/test';
import { test } from '../fixtures/base';
import credentials from '../tests/credentials.json';

test.describe('Saucedemo app basic tests', () => {
    test('should login successfully', async (
        /** @type {{ app: import('../pages/Application').Application }} */{ app },
    ) => {
        await app.login.navigate();
        await app.login.performLogin(credentials.standard_user.username, credentials.standard_user.password);

        await app.inventory.dropdownMenu();

        await app.inventory.sortingItems();

        const prices = await app.inventory.getAllPrices();
        const priceWithoutDollar = prices.map(price => parseFloat(price.replace('$', '').trim()));
        console.log(priceWithoutDollar);

        const sortedPrices = [...priceWithoutDollar].sort((a, b) => b - a);
        console.log(sortedPrices);

        expect(priceWithoutDollar).toEqual(sortedPrices);
    });
});
