import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdFrQuote1 from './lifttech-solutions-ltd-fr-quote-1';

describe(`with lifttechSolutionsLtdFrQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdFrQuote1 preset`, () => {
    const lifttechSolutionsLtdFrQuote1Preset =
      lifttechSolutionsLtdFrQuote1(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1",
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

  it(`should return a lifttechSolutionsLtdFrQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrQuote1PresetGraphql =
      lifttechSolutionsLtdFrQuote1(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdFrQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1",
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
