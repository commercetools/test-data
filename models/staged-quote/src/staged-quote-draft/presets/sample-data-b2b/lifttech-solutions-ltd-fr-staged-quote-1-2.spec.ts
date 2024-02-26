import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdFrStagedQuote12 from './lifttech-solutions-ltd-fr-staged-quote-1-2';

describe(`with lifttechSolutionsLtdFrStagedQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrStagedQuote12 preset`, () => {
    const lifttechSolutionsLtdFrStagedQuote12Preset =
      lifttechSolutionsLtdFrStagedQuote12(1).build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdFrStagedQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-fr-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrStagedQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrStagedQuote12PresetGraphql =
      lifttechSolutionsLtdFrStagedQuote12(1).buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdFrStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-fr-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": 1,
        "state": undefined,
      }
    `);
  });
});
