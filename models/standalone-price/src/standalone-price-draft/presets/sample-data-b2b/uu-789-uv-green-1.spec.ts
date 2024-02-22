import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen1 from './uu-789-uv-green-1';

describe(`with uu789UvGreen1 preset`, () => {
  it(`should return a uu789UvGreen1 preset`, () => {
    const uu789UvGreen1Preset = uu789UvGreen1().build<TStandalonePriceDraft>();
    expect(uu789UvGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-green-1",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen1 preset when built for graphql`, () => {
    const uu789UvGreen1PresetGraphql =
      uu789UvGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-green-1",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
