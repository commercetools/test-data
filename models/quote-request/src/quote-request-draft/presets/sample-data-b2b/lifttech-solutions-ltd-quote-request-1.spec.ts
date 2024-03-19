import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdQuoteRequest1 from './lifttech-solutions-ltd-quote-request-1';

describe(`with lifttechSolutionsLtdQuoteRequest1 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuoteRequest1 preset`, () => {
    const lifttechSolutionsLtdQuoteRequest1Preset =
      lifttechSolutionsLtdQuoteRequest1(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest1Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuoteRequest1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuoteRequest1PresetGraphql =
      lifttechSolutionsLtdQuoteRequest1(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
