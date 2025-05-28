import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed4 from './aaa-789-uv-red-4';

describe(`with aaa789UvRed4 preset`, () => {
  it(`should return a aaa789UvRed4 preset`, () => {
    const aaa789UvRed4Preset = aaa789UvRed4().build<TStandalonePriceDraft>();
    expect(aaa789UvRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-4",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
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

  it(`should return a aaa789UvRed4 preset when built for graphql`, () => {
    const aaa789UvRed4PresetGraphql =
      aaa789UvRed4().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-4",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
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
