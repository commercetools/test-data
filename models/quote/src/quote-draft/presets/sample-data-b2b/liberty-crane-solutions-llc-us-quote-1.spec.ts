import type { TQuoteDraft } from '../../../types';
import libertyCraneSolutionsLlcUsQuote1 from './liberty-crane-solutions-llc-us-quote-1';

describe(`with libertyCraneSolutionsLlcUsQuote1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsQuote1 preset`, () => {
    const libertyCraneSolutionsLlcUsQuote1Preset =
      libertyCraneSolutionsLlcUsQuote1(1).build<TQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-1",
        "stagedQuote": {
          "key": "liberty-crane-solutions-llc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsQuote1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsQuote1PresetGraphql =
      libertyCraneSolutionsLlcUsQuote1(1).buildGraphql<TQuoteDraft>();
    expect(libertyCraneSolutionsLlcUsQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "liberty-crane-solutions-llc-us-quote-1",
        "stagedQuote": {
          "key": "liberty-crane-solutions-llc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
