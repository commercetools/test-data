import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdDeQuote12 from './lifttech-solutions-ltd-de-quote-1-2';

describe(`with lifttechSolutionsLtdDeQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuote12 preset`, () => {
    const lifttechSolutionsLtdDeQuote12Preset =
      lifttechSolutionsLtdDeQuote12(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-de-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuote12PresetGraphql =
      lifttechSolutionsLtdDeQuote12(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote12PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-de-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
