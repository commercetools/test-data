import type { TOrderFromQuoteDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuote1 from './liberty-crane-solutions-llc-us-quote-1';

describe(`with libertyCraneSolutionsLlcUsQuote1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuote1 preset`, () => {
    const libertyCraneSolutionsLlcUsQuote1Preset =
      libertyCraneSolutionsLlcUsQuote1(1).build<TOrderFromQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "liberty-crane-solutions-llc-us-from-quote-1",
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "quote": {
          "key": "liberty-crane-solutions-llc-us-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuote1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuote1PresetGraphql =
      libertyCraneSolutionsLlcUsQuote1(1).buildGraphql<TOrderFromQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "orderNumber": "liberty-crane-solutions-llc-us-from-quote-1",
        "orderState": "Confirmed",
        "paymentState": "Paid",
        "quote": {
          "key": "liberty-crane-solutions-llc-us-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Ready",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
