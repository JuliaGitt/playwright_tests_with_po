import { BasePage } from './Base.page';

export class InventoryPage extends BasePage {
    url = '/inventory.html';

    headerTitle = this.page.locator('.title');

    inventoryItems = this.page.locator('.inventory_item');

    addItemToCartButton = this.page.locator('[id^="add-to-cart"]');

    priceElements = this.page.locator('[data-test="inventory-item-price"]');

    dropdown = this.page.locator('[data-test="product-sort-container"]');

    sorting = this.page.locator('[data-test= "product-sort-container"]');

    async addItemToCartById(id) {
        await this.addItemToCartButton.nth(id).click();
    }

    async getAllPrices() {
        return this.priceElements.allTextContents();
    }

    async dropdownMenu() {
        await this.dropdown.click();
    }

    async sortingItems() {
        await this.sorting.selectOption('hilo');
    }
}
