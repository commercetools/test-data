import type { TQuoteRequestDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuoteRequest1 from './liberty-crane-solutions-llc-us-quote-request-1';

describe(`with libertyCraneSolutionsLlcUsQuoteRequest1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest1 preset`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest1Preset =
      libertyCraneSolutionsLlcUsQuoteRequest1(1).build<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest1Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest1PresetGraphql =
      libertyCraneSolutionsLlcUsQuoteRequest1(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
