import { ElementFinder, promise, element, ElementArrayFinder, by } from 'protractor';

export class ProductListPage {

  public get productContainerList(): ElementArrayFinder {
    return element.all(by.css('#center_column > ul > li'));
  }

  private findByProduct(name : String): ElementFinder {
    return this.productContainerList.filter((element : ElementFinder) => element
        .$('.product-name')
        .getText().then(text => text === name))
        .first();
  }

  public selectProduct(name : String): promise.Promise<void> {
    return this.findByProduct(name).$('img').click();
  }
}
