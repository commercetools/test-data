import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdFrQuoteRequest1 from './lifttech-solutions-ltd-fr-quote-request-1';

describe(`with lifttechSolutionsLtdFrQuoteRequest1 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuoteRequest1 preset`, () => {
    const lifttechSolutionsLtdFrQuoteRequest1Preset =
      lifttechSolutionsLtdFrQuoteRequest1(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest1Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrQuoteRequest1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuoteRequest1PresetGraphql =
      lifttechSolutionsLtdFrQuoteRequest1(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
