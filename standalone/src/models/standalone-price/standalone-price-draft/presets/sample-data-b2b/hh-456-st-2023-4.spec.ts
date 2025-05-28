import type { TStandalonePriceDraft } from '../../../types';
import hh456St20234 from './hh-456-st-2023-4';

describe(`with hh456St20234 preset`, () => {
  it(`should return a hh456St20234 preset`, () => {
    const hh456St20234Preset = hh456St20234().build<TStandalonePriceDraft>();
    expect(hh456St20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-4",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hh456St20234 preset when built for graphql`, () => {
    const hh456St20234PresetGraphql =
      hh456St20234().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-4",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
