import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdFrQuote12 from './lifttech-solutions-ltd-fr-quote-1-2';

describe(`with lifttechSolutionsLtdFrQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuote12 preset`, () => {
    const lifttechSolutionsLtdFrQuote12Preset =
      lifttechSolutionsLtdFrQuote12(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-fr-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuote12PresetGraphql =
      lifttechSolutionsLtdFrQuote12(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote12PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-fr-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
