import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdEsQuoteRequest12 from './lifttech-solutions-ltd-es-quote-request-1-2';

describe(`with lifttechSolutionsLtdEsQuoteRequest12 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuoteRequest12 preset`, () => {
    const lifttechSolutionsLtdEsQuoteRequest12Preset =
      lifttechSolutionsLtdEsQuoteRequest12(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest12Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuoteRequest12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuoteRequest12PresetGraphql =
      lifttechSolutionsLtdEsQuoteRequest12(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
