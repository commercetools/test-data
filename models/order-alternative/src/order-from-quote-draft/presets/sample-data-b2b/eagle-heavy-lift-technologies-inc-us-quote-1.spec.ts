import {
  restPreset,
  graphqlPreset,
} from './eagle-heavy-lift-technologies-inc-us-quote-1';

describe(`with eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote1Preset = restPreset(1).build();
    expect(eagleHeavyLiftTechnologiesIncUsQuote1Preset).toMatchInlineSnapshot(`
      {
        "orderNumber": "eagle-heavy-lift-technologies-inc-us-from-quote-1",
        "orderState": "Open",
        "paymentState": "Pending",
        "quote": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote1 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote1PresetGraphql =
      graphqlPreset(1).build();
    expect(eagleHeavyLiftTechnologiesIncUsQuote1PresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "orderNumber": "eagle-heavy-lift-technologies-inc-us-from-quote-1",
        "orderState": "Open",
        "paymentState": "Pending",
        "quote": {
          "key": "eagle-heavy-lift-technologies-inc-us-quote-1",
          "typeId": "quote",
        },
        "quoteStateToAccepted": true,
        "shipmentState": "Pending",
        "state": undefined,
        "version": 1,
      }
    `);
  });
});
