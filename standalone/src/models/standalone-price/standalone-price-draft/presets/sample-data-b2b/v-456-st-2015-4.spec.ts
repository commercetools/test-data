import type { TStandalonePriceDraft } from '../../../types';
import v456St20154 from './v-456-st-2015-4';

describe(`with v456St20154 preset`, () => {
  it(`should return a v456St20154 preset`, () => {
    const v456St20154Preset = v456St20154().build<TStandalonePriceDraft>();
    expect(v456St20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-4",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2015",
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

  it(`should return a v456St20154 preset when built for graphql`, () => {
    const v456St20154PresetGraphql =
      v456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-4",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2015",
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
