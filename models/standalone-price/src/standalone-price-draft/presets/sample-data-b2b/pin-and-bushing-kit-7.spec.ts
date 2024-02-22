import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit7 from './pin-and-bushing-kit-7';

describe(`with pinAndBushingKit7 preset`, () => {
  it(`should return a pinAndBushingKit7 preset`, () => {
    const pinAndBushingKit7Preset =
      pinAndBushingKit7().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-7",
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

  it(`should return a pinAndBushingKit7 preset when built for graphql`, () => {
    const pinAndBushingKit7PresetGraphql =
      pinAndBushingKit7().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-7",
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
