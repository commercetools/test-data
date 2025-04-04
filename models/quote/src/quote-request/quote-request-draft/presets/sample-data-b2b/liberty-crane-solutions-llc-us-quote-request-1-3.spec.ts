import type { TQuoteRequestDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuoteRequest13 from './liberty-crane-solutions-llc-us-quote-request-1-3';

describe(`with libertyCraneSolutionsLlcUsQuoteRequest13 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest13 preset`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest13Preset =
      libertyCraneSolutionsLlcUsQuoteRequest13(1).build<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest13Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest13 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest13PresetGraphql =
      libertyCraneSolutionsLlcUsQuoteRequest13(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
