import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvGreen1 from './aaa-789-uv-green-1';

describe(`with aaa789UvGreen1 preset`, () => {
  it(`should return a aaa789UvGreen1 preset`, () => {
    const aaa789UvGreen1Preset =
      aaa789UvGreen1().build<TStandalonePriceDraft>();
    expect(aaa789UvGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-1",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5940000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aaa789UvGreen1 preset when built for graphql`, () => {
    const aaa789UvGreen1PresetGraphql =
      aaa789UvGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-green-1",
        "sku": "aaa789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5940000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
