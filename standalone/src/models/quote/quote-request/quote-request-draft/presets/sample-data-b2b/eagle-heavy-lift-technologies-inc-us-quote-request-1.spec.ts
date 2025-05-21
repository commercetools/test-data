import type { TQuoteRequestDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuoteRequest1 from './eagle-heavy-lift-technologies-inc-us-quote-request-1';

describe(`with eagleHeavyLiftTechnologiesIncUsQuoteRequest1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest1Preset =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest1(
        1
      ).build<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest1Preset)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuoteRequest1 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuoteRequest1PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsQuoteRequest1(
        1
      ).buildGraphql<TQuoteRequestDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsQuoteRequest1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "cart": {
          "key": "eagle-heavy-lift-technologies-inc-us-cart-1",
          "typeId": "cart",
        },
        "cartVersion": 1,
        "comment": "Please provide a quote for the following items.",
        "custom": undefined,
        "key": "eagle-heavy-lift-technologies-inc-us-quote-request-1",
        "purchaseOrderNumber": undefined,
        "state": undefined,
      }
    `);
  });
});
