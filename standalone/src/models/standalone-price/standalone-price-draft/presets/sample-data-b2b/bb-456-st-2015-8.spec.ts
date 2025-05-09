import type { TStandalonePriceDraft } from '../../../types';
import bb456St20158 from './bb-456-st-2015-8';

describe(`with bb456St20158 preset`, () => {
  it(`should return a bb456St20158 preset`, () => {
    const bb456St20158Preset = bb456St20158().build<TStandalonePriceDraft>();
    expect(bb456St20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-8",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20158 preset when built for graphql`, () => {
    const bb456St20158PresetGraphql =
      bb456St20158().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-8",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
