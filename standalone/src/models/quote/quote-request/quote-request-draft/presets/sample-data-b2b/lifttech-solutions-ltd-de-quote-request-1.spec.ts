import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdDeQuoteRequest1 from './lifttech-solutions-ltd-de-quote-request-1';

describe(`with lifttechSolutionsLtdDeQuoteRequest1 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuoteRequest1 preset`, () => {
    const lifttechSolutionsLtdDeQuoteRequest1Preset =
      lifttechSolutionsLtdDeQuoteRequest1(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest1Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuoteRequest1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuoteRequest1PresetGraphql =
      lifttechSolutionsLtdDeQuoteRequest1(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
