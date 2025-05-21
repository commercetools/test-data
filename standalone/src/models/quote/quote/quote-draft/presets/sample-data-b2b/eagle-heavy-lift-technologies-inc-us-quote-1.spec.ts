import type { TQuoteDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuote1 from './eagle-heavy-lift-technologies-inc-us-quote-1';

describe(`with eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote1Preset =
      eagleHeavyLiftTechnologiesIncUsQuote1(1).build<TQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuote1Preset).toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-1",
        "stagedQuote": {
          "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote1 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote1PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsQuote1(1).buildGraphql<TQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-1",
        "stagedQuote": {
          "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
          "typeId": "staged-quote",
        },
        "stagedQuoteStateToSent": true,
        "stagedQuoteVersion": 1,
        "state": undefined,
      }
    `);
  });
});
