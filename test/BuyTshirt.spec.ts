import { browser } from 'protractor';
import { MenuContentPage,
  ProductListPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  let finalMessage;

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.clickImage();
    await productDetailPage.addToCart();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();

    await signInStepPage.insertEmail('aperdomobo@gmail.com');
    await signInStepPage.insertPassword('WorkshopProtractor');
    await signInStepPage.submitLogin();

    await addressStepPage.proceedToCheckout();

    await shippingStepPage.agreeTermsAndConditions();
    await shippingStepPage.proceedToCheckout();

    await paymentStepPage.payByWire();
    await bankPaymentPage.confirmOrder();
    finalMessage = await orderResumePage.getOrderCompleteMessage();
  });

  it('then should be bought a t-shirt', () => {
    expect(finalMessage).toBe('Your order on My Store is complete.');
  });
});
