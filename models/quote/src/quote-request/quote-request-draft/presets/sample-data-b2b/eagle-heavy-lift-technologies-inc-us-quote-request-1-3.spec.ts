import type { TQuoteRequestDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuoteRequest13 from './eagle-heavy-lift-technologies-inc-us-quote-request-1-3';

describe(`with eagleHeavyLiftTechnologiesIncUsQuoteRequest13 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest13 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest13Preset =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest13(
        1
      ).build<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest13Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest13 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest13PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest13(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest13PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-3",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
