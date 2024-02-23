import type { TStagedQuoteDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsStagedQuote1 from './eagle-heavy-lift-technologies-inc-us-staged-quote-1';

describe(`with eagleHeavyLiftTechnologiesIncUsStagedQuote1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsStagedQuote1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsStagedQuote1Preset =
      eagleHeavyLiftTechnologiesIncUsStagedQuote1().build<TStagedQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsStagedQuote1Preset)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
        "quoteRequest": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsStagedQuote1 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsStagedQuote1PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsStagedQuote1().buildGraphql<TStagedQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsStagedQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1",
        "quoteRequest": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": true,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
