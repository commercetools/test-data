import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdStagedQuote1 from './lifttech-solutions-ltd-staged-quote-1';

describe(`with lifttechSolutionsLtdStagedQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdStagedQuote1 preset`, () => {
    const lifttechSolutionsLtdStagedQuote1Preset =
      lifttechSolutionsLtdStagedQuote1().build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdStagedQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdStagedQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdStagedQuote1PresetGraphql =
      lifttechSolutionsLtdStagedQuote1().buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
