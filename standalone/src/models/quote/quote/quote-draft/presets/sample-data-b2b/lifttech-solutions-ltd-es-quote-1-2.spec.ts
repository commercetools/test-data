import type { TQuoteDraft } from '../../../types';
import lifttechSolutionsLtdEsQuote12 from './lifttech-solutions-ltd-es-quote-1-2';

describe(`with lifttechSolutionsLtdEsQuote12 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsQuote12 preset`, () => {
    const lifttechSolutionsLtdEsQuote12Preset =
      lifttechSolutionsLtdEsQuote12(1).build<TQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-es-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsQuote12 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsQuote12PresetGraphql =
      lifttechSolutionsLtdEsQuote12(1).buildGraphql<TQuoteDraft>();
    expect(lifttechSolutionsLtdEsQuote12PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "lifttech-solutions-ltd-es-quote-1-2",
        "stagedQuote": {
          "key": "lifttech-solutions-ltd-es-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
