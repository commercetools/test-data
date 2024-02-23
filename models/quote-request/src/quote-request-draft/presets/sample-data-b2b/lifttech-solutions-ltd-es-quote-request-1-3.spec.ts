import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdEsQuoteRequest13 from './lifttech-solutions-ltd-es-quote-request-1-3';

describe(`with lifttechSolutionsLtdEsQuoteRequest13 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuoteRequest13 preset`, () => {
    const lifttechSolutionsLtdEsQuoteRequest13Preset =
      lifttechSolutionsLtdEsQuoteRequest13(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest13Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuoteRequest13 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuoteRequest13PresetGraphql =
      lifttechSolutionsLtdEsQuoteRequest13(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
