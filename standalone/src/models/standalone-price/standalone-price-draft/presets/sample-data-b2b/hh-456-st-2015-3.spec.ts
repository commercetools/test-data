import type { TStandalonePriceDraft } from '../../../types';
import hh456St20153 from './hh-456-st-2015-3';

describe(`with hh456St20153 preset`, () => {
  it(`should return a hh456St20153 preset`, () => {
    const hh456St20153Preset = hh456St20153().build<TStandalonePriceDraft>();
    expect(hh456St20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-3",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20153 preset when built for graphql`, () => {
    const hh456St20153PresetGraphql =
      hh456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-3",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
