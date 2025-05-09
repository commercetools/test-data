import type { TStandalonePriceDraft } from '../../../types';
import bb456St20154 from './bb-456-st-2015-4';

describe(`with bb456St20154 preset`, () => {
  it(`should return a bb456St20154 preset`, () => {
    const bb456St20154Preset = bb456St20154().build<TStandalonePriceDraft>();
    expect(bb456St20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-4",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20154 preset when built for graphql`, () => {
    const bb456St20154PresetGraphql =
      bb456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-4",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
