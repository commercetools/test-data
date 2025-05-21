import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdQuoteRequest12 from './lifttech-solutions-ltd-quote-request-1-2';

describe(`with lifttechSolutionsLtdQuoteRequest12 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuoteRequest12 preset`, () => {
    const lifttechSolutionsLtdQuoteRequest12Preset =
      lifttechSolutionsLtdQuoteRequest12(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest12Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuoteRequest12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuoteRequest12PresetGraphql =
      lifttechSolutionsLtdQuoteRequest12(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
