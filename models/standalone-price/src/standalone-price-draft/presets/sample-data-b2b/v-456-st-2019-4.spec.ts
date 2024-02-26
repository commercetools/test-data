import type { TStandalonePriceDraft } from '../../../types';
import v456St20194 from './v-456-st-2019-4';

describe(`with v456St20194 preset`, () => {
  it(`should return a v456St20194 preset`, () => {
    const v456St20194Preset = v456St20194().build<TStandalonePriceDraft>();
    expect(v456St20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-4",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a v456St20194 preset when built for graphql`, () => {
    const v456St20194PresetGraphql =
      v456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-4",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
