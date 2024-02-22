import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit5 from './pin-and-bushing-kit-5';

describe(`with pinAndBushingKit5 preset`, () => {
  it(`should return a pinAndBushingKit5 preset`, () => {
    const pinAndBushingKit5Preset =
      pinAndBushingKit5().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-5",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit5 preset when built for graphql`, () => {
    const pinAndBushingKit5PresetGraphql =
      pinAndBushingKit5().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-5",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
