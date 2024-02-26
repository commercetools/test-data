import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdDeQuoteRequest13 from './lifttech-solutions-ltd-de-quote-request-1-3';

describe(`with lifttechSolutionsLtdDeQuoteRequest13 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuoteRequest13 preset`, () => {
    const lifttechSolutionsLtdDeQuoteRequest13Preset =
      lifttechSolutionsLtdDeQuoteRequest13(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest13Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuoteRequest13 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuoteRequest13PresetGraphql =
      lifttechSolutionsLtdDeQuoteRequest13(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
