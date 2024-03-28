import type { TOrderFromQuoteDraft } from '../../../types';
import lifttechSolutionsLtdDeQuote1 from './lifttech-solutions-ltd-de-quote-1';

describe(`with lifttechSolutionsLtdDeQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuote1 preset`, () => {
    const lifttechSolutionsLtdDeQuote1Preset =
      lifttechSolutionsLtdDeQuote1(1).build<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-de-from-quote-1",
        "orderState": "Confirmed",
        "paymentState": "BalanceDue",
        "quote": {
          "key": "lifttech-solutions-ltd-de-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Backorder",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuote1PresetGraphql =
      lifttechSolutionsLtdDeQuote1(1).buildGraphql<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-de-from-quote-1",
        "orderState": "Confirmed",
        "paymentState": "BalanceDue",
        "quote": {
          "key": "lifttech-solutions-ltd-de-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Backorder",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
