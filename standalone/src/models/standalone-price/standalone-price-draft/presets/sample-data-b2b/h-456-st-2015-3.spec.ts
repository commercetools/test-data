import type { TStandalonePriceDraft } from '../../../types';
import h456St20153 from './h-456-st-2015-3';

describe(`with h456St20153 preset`, () => {
  it(`should return a h456St20153 preset`, () => {
    const h456St20153Preset = h456St20153().build<TStandalonePriceDraft>();
    expect(h456St20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-3",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20153 preset when built for graphql`, () => {
    const h456St20153PresetGraphql =
      h456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-3",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
