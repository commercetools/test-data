import type { TStandalonePriceDraft } from '../../../types';
import hh456St20193 from './hh-456-st-2019-3';

describe(`with hh456St20193 preset`, () => {
  it(`should return a hh456St20193 preset`, () => {
    const hh456St20193Preset = hh456St20193().build<TStandalonePriceDraft>();
    expect(hh456St20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-3",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2860000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20193 preset when built for graphql`, () => {
    const hh456St20193PresetGraphql =
      hh456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-3",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2860000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
