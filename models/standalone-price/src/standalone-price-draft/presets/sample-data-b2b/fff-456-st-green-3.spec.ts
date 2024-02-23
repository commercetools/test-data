import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen3 from './fff-456-st-green-3';

describe(`with fff456StGreen3 preset`, () => {
  it(`should return a fff456StGreen3 preset`, () => {
    const fff456StGreen3Preset =
      fff456StGreen3().build<TStandalonePriceDraft>();
    expect(fff456StGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-3",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10010000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StGreen3 preset when built for graphql`, () => {
    const fff456StGreen3PresetGraphql =
      fff456StGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-3",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10010000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
