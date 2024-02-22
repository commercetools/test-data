import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed8 from './aaa-789-uv-red-8';

describe(`with aaa789UvRed8 preset`, () => {
  it(`should return a aaa789UvRed8 preset`, () => {
    const aaa789UvRed8Preset = aaa789UvRed8().build<TStandalonePriceDraft>();
    expect(aaa789UvRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-8",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed8 preset when built for graphql`, () => {
    const aaa789UvRed8PresetGraphql =
      aaa789UvRed8().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-8",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
