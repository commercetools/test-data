import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdEsStagedQuote1 from './lifttech-solutions-ltd-es-staged-quote-1';

describe(`with lifttechSolutionsLtdEsStagedQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsStagedQuote1 preset`, () => {
    const lifttechSolutionsLtdEsStagedQuote1Preset =
      lifttechSolutionsLtdEsStagedQuote1().build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdEsStagedQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-es-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsStagedQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsStagedQuote1PresetGraphql =
      lifttechSolutionsLtdEsStagedQuote1().buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdEsStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-staged-quote-1",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-es-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
