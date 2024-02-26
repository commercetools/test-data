import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdFrStagedQuote1 from './lifttech-solutions-ltd-fr-staged-quote-1';

describe(`with lifttechSolutionsLtdFrStagedQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrStagedQuote1 preset`, () => {
    const lifttechSolutionsLtdFrStagedQuote1Preset =
      lifttechSolutionsLtdFrStagedQuote1(1).build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdFrStagedQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-fr-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrStagedQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrStagedQuote1PresetGraphql =
      lifttechSolutionsLtdFrStagedQuote1(1).buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdFrStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-fr-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });
});
