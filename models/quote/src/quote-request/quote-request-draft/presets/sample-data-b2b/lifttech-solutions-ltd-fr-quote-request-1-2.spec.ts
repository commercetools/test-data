import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdFrQuoteRequest12 from './lifttech-solutions-ltd-fr-quote-request-1-2';

describe(`with lifttechSolutionsLtdFrQuoteRequest12 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuoteRequest12 preset`, () => {
    const lifttechSolutionsLtdFrQuoteRequest12Preset =
      lifttechSolutionsLtdFrQuoteRequest12(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest12Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrQuoteRequest12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuoteRequest12PresetGraphql =
      lifttechSolutionsLtdFrQuoteRequest12(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdFrQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-fr-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
