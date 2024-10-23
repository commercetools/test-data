import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdQuote1 from './lifttech-solutions-ltd-quote-1';

describe(`with lifttechSolutionsLtdQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdQuote1 preset`, () => {
    const lifttechSolutionsLtdQuote1Preset =
      lifttechSolutionsLtdQuote1(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdQuote1PresetGraphql =
      lifttechSolutionsLtdQuote1(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
