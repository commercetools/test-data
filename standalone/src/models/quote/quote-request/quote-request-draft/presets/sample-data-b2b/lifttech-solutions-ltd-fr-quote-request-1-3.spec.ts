import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdFrQuoteRequest13 from './lifttech-solutions-ltd-fr-quote-request-1-3';

describe(`with lifttechSolutionsLtdFrQuoteRequest13 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuoteRequest13 preset`, () => {
    const lifttechSolutionsLtdFrQuoteRequest13Preset =
      lifttechSolutionsLtdFrQuoteRequest13(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest13Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrQuoteRequest13 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuoteRequest13PresetGraphql =
      lifttechSolutionsLtdFrQuoteRequest13(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
