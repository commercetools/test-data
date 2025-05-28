import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed5 from './aaa-789-uv-red-5';

describe(`with aaa789UvRed5 preset`, () => {
  it(`should return a aaa789UvRed5 preset`, () => {
    const aaa789UvRed5Preset = aaa789UvRed5().build<TStandalonePriceDraft>();
    expect(aaa789UvRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-5",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed5 preset when built for graphql`, () => {
    const aaa789UvRed5PresetGraphql =
      aaa789UvRed5().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-5",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
