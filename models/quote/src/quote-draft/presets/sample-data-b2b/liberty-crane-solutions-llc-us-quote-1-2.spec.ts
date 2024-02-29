import type { TQuoteDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuote12 from './liberty-crane-solutions-llc-us-quote-1-2';

describe(`with libertyCraneSolutionsLlcUsQuote12 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuote12 preset`, () => {
    const libertyCraneSolutionsLlcUsQuote12Preset =
      libertyCraneSolutionsLlcUsQuote12(1).build<TQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-1-2",
        "stagedQuote": {
          "key": "liberty-crane-solutions-llc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuote12 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuote12PresetGraphql =
      libertyCraneSolutionsLlcUsQuote12(1).buildGraphql<TQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-1-2",
        "stagedQuote": {
          "key": "liberty-crane-solutions-llc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
