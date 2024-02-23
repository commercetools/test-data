import type { TStandalonePriceDraft } from '../../../types';
import bb456St20193 from './bb-456-st-2019-3';

describe(`with bb456St20193 preset`, () => {
  it(`should return a bb456St20193 preset`, () => {
    const bb456St20193Preset = bb456St20193().build<TStandalonePriceDraft>();
    expect(bb456St20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-3",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2574000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20193 preset when built for graphql`, () => {
    const bb456St20193PresetGraphql =
      bb456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-3",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2574000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
