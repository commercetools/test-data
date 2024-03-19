import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue1 from './aaa-789-uv-blue-1';

describe(`with aaa789UvBlue1 preset`, () => {
  it(`should return a aaa789UvBlue1 preset`, () => {
    const aaa789UvBlue1Preset = aaa789UvBlue1().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-1",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5445000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aaa789UvBlue1 preset when built for graphql`, () => {
    const aaa789UvBlue1PresetGraphql =
      aaa789UvBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-1",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5445000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
