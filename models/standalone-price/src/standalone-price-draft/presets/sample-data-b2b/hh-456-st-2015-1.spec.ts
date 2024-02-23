import type { TStandalonePriceDraft } from '../../../types';
import hh456St20151 from './hh-456-st-2015-1';

describe(`with hh456St20151 preset`, () => {
  it(`should return a hh456St20151 preset`, () => {
    const hh456St20151Preset = hh456St20151().build<TStandalonePriceDraft>();
    expect(hh456St20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-1",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hh456St20151 preset when built for graphql`, () => {
    const hh456St20151PresetGraphql =
      hh456St20151().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-1",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
