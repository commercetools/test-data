import type { TOrderFromQuoteDraft } from '../../../types';
import lifttechSolutionsLtdEsQuote1 from './lifttech-solutions-ltd-es-quote-1';

describe(`with lifttechSolutionsLtdEsQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuote1 preset`, () => {
    const lifttechSolutionsLtdEsQuote1Preset =
      lifttechSolutionsLtdEsQuote1(1).build<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-es-from-quote-1",
        "orderState": "Cancelled",
        "paymentState": "Failed",
        "quote": {
          "key": "lifttech-solutions-ltd-es-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuote1PresetGraphql =
      lifttechSolutionsLtdEsQuote1(1).buildGraphql<TOrderFromQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "orderNumber": "lifttech-solutions-ltd-es-from-quote-1",
        "orderState": "Cancelled",
        "paymentState": "Failed",
        "quote": {
          "key": "lifttech-solutions-ltd-es-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
