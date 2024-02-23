import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdEsStagedQuote12 from './lifttech-solutions-ltd-es-staged-quote-1-2';

describe(`with lifttechSolutionsLtdEsStagedQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsStagedQuote12 preset`, () => {
    const lifttechSolutionsLtdEsStagedQuote12Preset =
      lifttechSolutionsLtdEsStagedQuote12().build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdEsStagedQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-es-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsStagedQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsStagedQuote12PresetGraphql =
      lifttechSolutionsLtdEsStagedQuote12().buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdEsStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-es-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
