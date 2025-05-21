import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdDeQuote1 from './lifttech-solutions-ltd-de-quote-1';

describe(`with lifttechSolutionsLtdDeQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeQuote1 preset`, () => {
    const lifttechSolutionsLtdDeQuote1Preset =
      lifttechSolutionsLtdDeQuote1(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-de-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeQuote1PresetGraphql =
      lifttechSolutionsLtdDeQuote1(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdDeQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-de-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-de-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
