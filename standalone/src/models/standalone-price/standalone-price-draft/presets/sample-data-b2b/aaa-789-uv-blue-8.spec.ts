import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue8 from './aaa-789-uv-blue-8';

describe(`with aaa789UvBlue8 preset`, () => {
  it(`should return a aaa789UvBlue8 preset`, () => {
    const aaa789UvBlue8Preset = aaa789UvBlue8().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-8",
        "sku": "aaa789-uv-blue",
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

  it(`should return a aaa789UvBlue8 preset when built for graphql`, () => {
    const aaa789UvBlue8PresetGraphql =
      aaa789UvBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-8",
        "sku": "aaa789-uv-blue",
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
