import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue6 from './uu-789-uv-blue-6';

describe(`with uu789UvBlue6 preset`, () => {
  it(`should return a uu789UvBlue6 preset`, () => {
    const uu789UvBlue6Preset = uu789UvBlue6().build<TStandalonePriceDraft>();
    expect(uu789UvBlue6Preset).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-blue-6",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvBlue6 preset when built for graphql`, () => {
    const uu789UvBlue6PresetGraphql =
      uu789UvBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue6PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-blue-6",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
