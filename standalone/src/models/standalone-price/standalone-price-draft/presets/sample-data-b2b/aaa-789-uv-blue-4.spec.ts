import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue4 from './aaa-789-uv-blue-4';

describe(`with aaa789UvBlue4 preset`, () => {
  it(`should return a aaa789UvBlue4 preset`, () => {
    const aaa789UvBlue4Preset = aaa789UvBlue4().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-4",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aaa789UvBlue4 preset when built for graphql`, () => {
    const aaa789UvBlue4PresetGraphql =
      aaa789UvBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-4",
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
