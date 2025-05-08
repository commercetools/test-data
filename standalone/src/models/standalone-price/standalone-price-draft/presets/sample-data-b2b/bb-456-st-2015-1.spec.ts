import type { TStandalonePriceDraft } from '../../../types';
import bb456St20151 from './bb-456-st-2015-1';

describe(`with bb456St20151 preset`, () => {
  it(`should return a bb456St20151 preset`, () => {
    const bb456St20151Preset = bb456St20151().build<TStandalonePriceDraft>();
    expect(bb456St20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-1",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20151 preset when built for graphql`, () => {
    const bb456St20151PresetGraphql =
      bb456St20151().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-1",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
