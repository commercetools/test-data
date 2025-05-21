import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdQuoteRequest13 from './lifttech-solutions-ltd-quote-request-1-3';

describe(`with lifttechSolutionsLtdQuoteRequest13 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuoteRequest13 preset`, () => {
    const lifttechSolutionsLtdQuoteRequest13Preset =
      lifttechSolutionsLtdQuoteRequest13(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest13Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuoteRequest13 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuoteRequest13PresetGraphql =
      lifttechSolutionsLtdQuoteRequest13(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
