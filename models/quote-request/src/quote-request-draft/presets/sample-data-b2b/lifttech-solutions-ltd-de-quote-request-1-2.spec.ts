import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdDeQuoteRequest12 from './lifttech-solutions-ltd-de-quote-request-1-2';

describe(`with lifttechSolutionsLtdDeQuoteRequest12 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuoteRequest12 preset`, () => {
    const lifttechSolutionsLtdDeQuoteRequest12Preset =
      lifttechSolutionsLtdDeQuoteRequest12(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest12Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuoteRequest12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuoteRequest12PresetGraphql =
      lifttechSolutionsLtdDeQuoteRequest12(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdDeQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-de-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
