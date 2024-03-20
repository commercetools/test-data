import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdQuote12 from './lifttech-solutions-ltd-quote-1-2';

describe(`with lifttechSolutionsLtdQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuote12 preset`, () => {
    const lifttechSolutionsLtdQuote12Preset =
      lifttechSolutionsLtdQuote12(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuote12PresetGraphql =
      lifttechSolutionsLtdQuote12(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdQuote12PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
