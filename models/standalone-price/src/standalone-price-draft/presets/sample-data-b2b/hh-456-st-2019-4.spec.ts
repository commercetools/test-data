import type { TStandalonePriceDraft } from '../../../types';
import hh456St20194 from './hh-456-st-2019-4';

describe(`with hh456St20194 preset`, () => {
  it(`should return a hh456St20194 preset`, () => {
    const hh456St20194Preset = hh456St20194().build<TStandalonePriceDraft>();
    expect(hh456St20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-4",
        "sku": "hh456-st-2019",
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

  it(`should return a hh456St20194 preset when built for graphql`, () => {
    const hh456St20194PresetGraphql =
      hh456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-4",
        "sku": "hh456-st-2019",
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
