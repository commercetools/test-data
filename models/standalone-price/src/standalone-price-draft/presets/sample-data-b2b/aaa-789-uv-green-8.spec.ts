import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen8 from './aaa-789-uv-green-8';

describe(`with aaa789UvGreen8 preset`, () => {
  it(`should return a aaa789UvGreen8 preset`, () => {
    const aaa789UvGreen8Preset =
      aaa789UvGreen8().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen8Preset).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-8",
        "sku": "aaa789-uv-green",
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

  it(`should return a aaa789UvGreen8 preset when built for graphql`, () => {
    const aaa789UvGreen8PresetGraphql =
      aaa789UvGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aaa789-uv-green-8",
        "sku": "aaa789-uv-green",
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
