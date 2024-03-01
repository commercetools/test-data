import type { TOrderFromQuoteDraft } from '../../../types';
import lifttechSolutionsLtdQuote1 from './lifttech-solutions-ltd-quote-1';

describe(`with lifttechSolutionsLtdQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuote1 preset`, () => {
    const lifttechSolutionsLtdQuote1Preset =
      lifttechSolutionsLtdQuote1(1).build<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-quote-1",
        "orderState": "Confirmed",
        "paymentState": "CreditOwed",
        "quote": {
          "key": "lifttech-solutions-ltd-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuote1PresetGraphql =
      lifttechSolutionsLtdQuote1(1).buildGraphql<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-quote-1",
        "orderState": "Confirmed",
        "paymentState": "CreditOwed",
        "quote": {
          "key": "lifttech-solutions-ltd-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Shipped",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
