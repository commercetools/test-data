import type { TStandalonePriceDraft } from '../../../types';
import h456St20157 from './h-456-st-2015-7';

describe(`with h456St20157 preset`, () => {
  it(`should return a h456St20157 preset`, () => {
    const h456St20157Preset = h456St20157().build<TStandalonePriceDraft>();
    expect(h456St20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-7",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20157 preset when built for graphql`, () => {
    const h456St20157PresetGraphql =
      h456St20157().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-7",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
