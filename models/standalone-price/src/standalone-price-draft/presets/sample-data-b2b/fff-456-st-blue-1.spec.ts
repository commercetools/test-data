import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue1 from './fff-456-st-blue-1';

describe(`with fff456StBlue1 preset`, () => {
  it(`should return a fff456StBlue1 preset`, () => {
    const fff456StBlue1Preset = fff456StBlue1().build<TStandalonePriceDraft>();
    expect(fff456StBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-1",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7865001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a fff456StBlue1 preset when built for graphql`, () => {
    const fff456StBlue1PresetGraphql =
      fff456StBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-1",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7865001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
