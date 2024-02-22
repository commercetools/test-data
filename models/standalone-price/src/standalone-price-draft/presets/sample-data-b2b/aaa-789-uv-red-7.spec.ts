import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed7 from './aaa-789-uv-red-7';

describe(`with aaa789UvRed7 preset`, () => {
  it(`should return a aaa789UvRed7 preset`, () => {
    const aaa789UvRed7Preset = aaa789UvRed7().build<TStandalonePriceDraft>();
    expect(aaa789UvRed7Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-red-7",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed7 preset when built for graphql`, () => {
    const aaa789UvRed7PresetGraphql =
      aaa789UvRed7().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-red-7",
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
