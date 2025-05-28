import type { TStandalonePriceDraft } from '../../../types';
import hh456St20198 from './hh-456-st-2019-8';

describe(`with hh456St20198 preset`, () => {
  it(`should return a hh456St20198 preset`, () => {
    const hh456St20198Preset = hh456St20198().build<TStandalonePriceDraft>();
    expect(hh456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20198 preset when built for graphql`, () => {
    const hh456St20198PresetGraphql =
      hh456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
