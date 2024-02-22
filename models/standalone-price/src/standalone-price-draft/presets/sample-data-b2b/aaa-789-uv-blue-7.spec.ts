import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue7 from './aaa-789-uv-blue-7';

describe(`with aaa789UvBlue7 preset`, () => {
  it(`should return a aaa789UvBlue7 preset`, () => {
    const aaa789UvBlue7Preset = aaa789UvBlue7().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue7Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-blue-7",
        "sku": "aaa789-uv-blue",
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

  it(`should return a aaa789UvBlue7 preset when built for graphql`, () => {
    const aaa789UvBlue7PresetGraphql =
      aaa789UvBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-blue-7",
        "sku": "aaa789-uv-blue",
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
