import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdDeStagedQuote1 from './lifttech-solutions-ltd-de-staged-quote-1';

describe(`with lifttechSolutionsLtdDeStagedQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeStagedQuote1 preset`, () => {
    const lifttechSolutionsLtdDeStagedQuote1Preset =
      lifttechSolutionsLtdDeStagedQuote1().build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdDeStagedQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-de-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeStagedQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeStagedQuote1PresetGraphql =
      lifttechSolutionsLtdDeStagedQuote1().buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdDeStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-de-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
