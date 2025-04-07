import type { TQuoteRequestDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuoteRequest12 from './liberty-crane-solutions-llc-us-quote-request-1-2';

describe(`with libertyCraneSolutionsLlcUsQuoteRequest12 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest12 preset`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest12Preset =
      libertyCraneSolutionsLlcUsQuoteRequest12(1).build<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest12Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuoteRequest12 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuoteRequest12PresetGraphql =
      libertyCraneSolutionsLlcUsQuoteRequest12(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(libertyCraneSolutionsLlcUsQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "liberty-crane-solutions-llc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
