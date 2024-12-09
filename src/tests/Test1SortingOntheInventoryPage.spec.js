import { expect } from '@playwright/test';
import { test } from '../fixtures/base';
import credentials from '../tests/credentials.json';

test.describe('Saucedemo app basic tests', () => {
    test('should sort items', async (
        /** @type {{ app: import('../pages/Application').Application }} */{ app },
    ) => {
        await app.login.navigate();
        await app.login.performLogin(credentials.standard_user.username, credentials.standard_user.password);

        // verifying sorting from high to low
        await app.inventory.sortingItems('hilo');
        const prices = await app.inventory.getAllPrices();
        const priceWithoutDollar = prices.map(price => parseFloat(price.replace('$', '').trim()));
        console.log(priceWithoutDollar);

        const sortedPrices = [...priceWithoutDollar].sort((a, b) => b - a);
        console.log(sortedPrices);
        expect(priceWithoutDollar).toEqual(sortedPrices);

        // verifying sorting from low to hight
        await app.inventory.sortingItems('lohi');

        const prices1 = await app.inventory.getAllPrices();
        const priceWithoutDollar1 = prices1.map(price => parseFloat(price.replace('$', '').trim()));
        console.log(priceWithoutDollar1);

        const sortedPrices1 = [...priceWithoutDollar1].sort((a, b) => a - b);
        console.log(sortedPrices1);
        expect(priceWithoutDollar1).toEqual(sortedPrices1);

        // verifying sorting from za
        await app.inventory.sortingItems('za');
        const names = await app.inventory.getAllNames();
        const sortedNames = names.map(name => name.trim());
        console.log(sortedNames);

        const expectedNames = [...sortedNames].sort((a, b) => b.localeCompare(a));
        console.log(sortedNames);
        expect(sortedNames).toEqual(expectedNames);

        // verifying sorting from az
        await app.inventory.sortingItems('az');
        const names1 = await app.inventory.getAllNames();
        const sortedNames1 = names1.map(name => name.trim());
        console.log(sortedNames1);

        const expectedNames1 = [...sortedNames1].sort((a, b) => a.localeCompare(b));
        console.log(sortedNames1);
        expect(sortedNames1).toEqual(expectedNames1);
    });
});
