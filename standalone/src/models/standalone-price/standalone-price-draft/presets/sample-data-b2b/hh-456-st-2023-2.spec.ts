import type { TStandalonePriceDraft } from '../../../types';
import hh456St20232 from './hh-456-st-2023-2';

describe(`with hh456St20232 preset`, () => {
  it(`should return a hh456St20232 preset`, () => {
    const hh456St20232Preset = hh456St20232().build<TStandalonePriceDraft>();
    expect(hh456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20232 preset when built for graphql`, () => {
    const hh456St20232PresetGraphql =
      hh456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
