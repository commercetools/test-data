import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed1 from './aaa-789-uv-red-1';

describe(`with aaa789UvRed1 preset`, () => {
  it(`should return a aaa789UvRed1 preset`, () => {
    const aaa789UvRed1Preset = aaa789UvRed1().build<TStandalonePriceDraft>();
    expect(aaa789UvRed1Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-red-1",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed1 preset when built for graphql`, () => {
    const aaa789UvRed1PresetGraphql =
      aaa789UvRed1().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-red-1",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
