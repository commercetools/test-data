import type { TStagedQuoteDraft } from '../../../types';
import libertyCraneSolutionsLlcUsStagedQuote1 from './liberty-crane-solutions-llc-us-staged-quote-1';

describe(`with libertyCraneSolutionsLlcUsStagedQuote1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsStagedQuote1 preset`, () => {
    const libertyCraneSolutionsLlcUsStagedQuote1Preset =
      libertyCraneSolutionsLlcUsStagedQuote1().build<TStagedQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsStagedQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-staged-quote-1",
        "quoteRequest": {
          "key": "liberty-crane-solutions-llc-us-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsStagedQuote1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsStagedQuote1PresetGraphql =
      libertyCraneSolutionsLlcUsStagedQuote1().buildGraphql<TStagedQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-staged-quote-1",
        "quoteRequest": {
          "key": "liberty-crane-solutions-llc-us-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
