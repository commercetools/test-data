import type { TStagedQuoteDraft } from '../../../types';
import libertyCraneSolutionsLlcUsStagedQuote12 from './liberty-crane-solutions-llc-us-staged-quote-1-2';

describe(`with libertyCraneSolutionsLlcUsStagedQuote12 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsStagedQuote12 preset`, () => {
    const libertyCraneSolutionsLlcUsStagedQuote12Preset =
      libertyCraneSolutionsLlcUsStagedQuote12().build<TStagedQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsStagedQuote12Preset)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-staged-quote-1-2",
        "quoteRequest": {
          "key": "liberty-crane-solutions-llc-us-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsStagedQuote12 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsStagedQuote12PresetGraphql =
      libertyCraneSolutionsLlcUsStagedQuote12().buildGraphql<TStagedQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-staged-quote-1-2",
        "quoteRequest": {
          "key": "liberty-crane-solutions-llc-us-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
