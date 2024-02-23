import type { TStagedQuoteDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsStagedQuote12 from './eagle-heavy-lift-technologies-inc-us-staged-quote-1-2';

describe(`with eagleHeavyLiftTechnologiesIncUsStagedQuote12 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsStagedQuote12 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsStagedQuote12Preset =
      eagleHeavyLiftTechnologiesIncUsStagedQuote12().build<TStagedQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsStagedQuote12Preset)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1-2",
        "quoteRequest": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsStagedQuote12 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsStagedQuote12PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsStagedQuote12().buildGraphql<TStagedQuoteDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsStagedQuote12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-staged-quote-1-2",
        "quoteRequest": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-2",
          "typeId": "quote-request",
        },
        "quoteRequestStateToAccepted": false,
        "quoteRequestVersion": undefined,
        "state": undefined,
      }
    `);
  });
});
