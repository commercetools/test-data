import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdDeStagedQuote12 from './lifttech-solutions-ltd-de-staged-quote-1-2';

describe(`with lifttechSolutionsLtdDeStagedQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeStagedQuote12 preset`, () => {
    const lifttechSolutionsLtdDeStagedQuote12Preset =
      lifttechSolutionsLtdDeStagedQuote12(1).build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdDeStagedQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-de-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeStagedQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeStagedQuote12PresetGraphql =
      lifttechSolutionsLtdDeStagedQuote12(1).buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdDeStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-de-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });
});
