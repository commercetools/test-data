import type { TQuoteRequestDraft } from '../../../types';
import lifttechSolutionsLtdEsQuoteRequest1 from './lifttech-solutions-ltd-es-quote-request-1';

describe(`with lifttechSolutionsLtdEsQuoteRequest1 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuoteRequest1 preset`, () => {
    const lifttechSolutionsLtdEsQuoteRequest1Preset =
      lifttechSolutionsLtdEsQuoteRequest1(1).build<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest1Preset).toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuoteRequest1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuoteRequest1PresetGraphql =
      lifttechSolutionsLtdEsQuoteRequest1(1).buildGraphql<TQuoteRequestDraft>();
    expect(lifttechSolutionsLtdEsQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "lifttech-solutions-ltd-es-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
