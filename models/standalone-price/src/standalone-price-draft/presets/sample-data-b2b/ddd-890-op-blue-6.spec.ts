import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue6 from './ddd-890-op-blue-6';

describe(`with ddd890OpBlue6 preset`, () => {
  it(`should return a ddd890OpBlue6 preset`, () => {
    const ddd890OpBlue6Preset = ddd890OpBlue6().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-6",
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue6 preset when built for graphql`, () => {
    const ddd890OpBlue6PresetGraphql =
      ddd890OpBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-6",
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
