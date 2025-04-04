import type { TQuoteRequestDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuoteRequest12 from './eagle-heavy-lift-technologies-inc-us-quote-request-1-2';

describe(`with eagleHeavyLiftTechnologiesIncUsQuoteRequest12 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest12 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest12Preset =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest12(
        1
      ).build<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest12Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest12 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest12PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest12(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest12PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1-2",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
