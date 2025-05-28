import type { TStandalonePriceDraft } from '../../../types';
import hh456St20152 from './hh-456-st-2015-2';

describe(`with hh456St20152 preset`, () => {
  it(`should return a hh456St20152 preset`, () => {
    const hh456St20152Preset = hh456St20152().build<TStandalonePriceDraft>();
    expect(hh456St20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20152 preset when built for graphql`, () => {
    const hh456St20152PresetGraphql =
      hh456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
