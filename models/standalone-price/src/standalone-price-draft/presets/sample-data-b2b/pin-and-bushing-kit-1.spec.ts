import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit1 from './pin-and-bushing-kit-1';

describe(`with pinAndBushingKit1 preset`, () => {
  it(`should return a pinAndBushingKit1 preset`, () => {
    const pinAndBushingKit1Preset =
      pinAndBushingKit1().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-1",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit1 preset when built for graphql`, () => {
    const pinAndBushingKit1PresetGraphql =
      pinAndBushingKit1().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-1",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
