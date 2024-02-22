import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue3 from './aaa-789-uv-blue-3';

describe(`with aaa789UvBlue3 preset`, () => {
  it(`should return a aaa789UvBlue3 preset`, () => {
    const aaa789UvBlue3Preset = aaa789UvBlue3().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-blue-3",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6435000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvBlue3 preset when built for graphql`, () => {
    const aaa789UvBlue3PresetGraphql =
      aaa789UvBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-blue-3",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6435000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
