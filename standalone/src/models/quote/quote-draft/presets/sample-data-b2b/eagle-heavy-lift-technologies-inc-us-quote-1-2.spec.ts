import type { TQuoteDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuote12 from './eagle-heavy-lift-technologies-inc-us-quote-1-2';

describe(`with eagleHeavyLiftTechnologiesIncUsQuote12 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote12 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote12Preset =
      eagleHeavyLiftTechnologiesIncUsQuote12(1).build<TQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuote12Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-1-2",
        "stagedQuote": {
          "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote12 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote12PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsQuote12(1).buildGraphql<TQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-1-2",
        "stagedQuote": {
          "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": false,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
