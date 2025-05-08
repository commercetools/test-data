import type { TOrderFromQuoteDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsQuote1 from './eagle-heavy-lift-technologies-inc-us-quote-1';

describe(`with eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsQuote1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsQuote1Preset =
      eagleHeavyLiftTechnologiesIncUsQuote1(1).build<TOrderFromQuoteDraft>();
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
      eagleHeavyLiftTechnologiesIncUsQuote1(
        1
      ).buildGraphql<TOrderFromQuoteDraft>();
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
