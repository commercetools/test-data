import type { TStagedQuoteDraft } from '../../../types';
import lifttechSolutionsLtdStagedQuote12 from './lifttech-solutions-ltd-staged-quote-1-2';

describe(`with lifttechSolutionsLtdStagedQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdStagedQuote12 preset`, () => {
    const lifttechSolutionsLtdStagedQuote12Preset =
      lifttechSolutionsLtdStagedQuote12().build<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdStagedQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdStagedQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdStagedQuote12PresetGraphql =
      lifttechSolutionsLtdStagedQuote12().buildGraphql<TStagedQuoteDraft>();
    expect(lifttechSolutionsLtdStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-staged-quote-1-2",
        "quoteRequest": {
          "key": "lifttech-solutions-ltd-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
