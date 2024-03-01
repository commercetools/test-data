import type { TOrderFromQuoteDraft } from '../../../types';
import lifttechSolutionsLtdFrQuote1 from './lifttech-solutions-ltd-fr-quote-1';

describe(`with lifttechSolutionsLtdFrQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuote1 preset`, () => {
    const lifttechSolutionsLtdFrQuote1Preset =
      lifttechSolutionsLtdFrQuote1(1).build<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-fr-quote-1",
        "orderState": "Complete",
        "paymentState": "Paid",
        "quote": {
          "key": "lifttech-solutions-ltd-fr-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Delivered",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuote1PresetGraphql =
      lifttechSolutionsLtdFrQuote1(1).buildGraphql<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-fr-quote-1",
        "orderState": "Complete",
        "paymentState": "Paid",
        "quote": {
          "key": "lifttech-solutions-ltd-fr-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Delivered",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
