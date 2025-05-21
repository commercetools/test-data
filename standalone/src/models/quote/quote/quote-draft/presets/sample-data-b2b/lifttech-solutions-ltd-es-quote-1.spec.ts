import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdEsQuote1 from './lifttech-solutions-ltd-es-quote-1';

describe(`with lifttechSolutionsLtdEsQuote1 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuote1 preset`, () => {
    const lifttechSolutionsLtdEsQuote1Preset =
      lifttechSolutionsLtdEsQuote1(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-es-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuote1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuote1PresetGraphql =
      lifttechSolutionsLtdEsQuote1(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote1PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-1",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-es-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
