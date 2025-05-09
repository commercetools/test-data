import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit3 from './pin-and-bushing-kit-3';

describe(`with pinAndBushingKit3 preset`, () => {
  it(`should return a pinAndBushingKit3 preset`, () => {
    const pinAndBushingKit3Preset =
      pinAndBushingKit3().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-3",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit3 preset when built for graphql`, () => {
    const pinAndBushingKit3PresetGraphql =
      pinAndBushingKit3().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-3",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
