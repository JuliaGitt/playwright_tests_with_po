import { BasePage } from './Base.page';

export class InventoryPage extends BasePage {
    url = '/inventory.html';

    headerTitle = this.page.locator('.title');

    inventoryItems = this.page.locator('.inventory_item');

    addItemToCartButton = this.page.getByTestId('[id^="add-to-cart"]');

    priceElements = this.page.getByTestId('inventory-item-price');

    nameElements = this.page.getByTestId('inventory-item-name');

    sorting = this.page.getByTestId('product-sort-container');

    async addItemToCartById(id) {
        await this.addItemToCartButton.nth(id).click();
    }

    async getAllPrices() {
        return this.priceElements.allTextContents();
    }

    async getAllNames() {
        return this.nameElements.allTextContents();
    }

    async sortingItems(option) {
        await this.sorting.selectOption(option);
    }
}
