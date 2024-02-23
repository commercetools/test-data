import type { TStandalonePriceDraft } from '../../../types';
import v456St20198 from './v-456-st-2019-8';

describe(`with v456St20198 preset`, () => {
  it(`should return a v456St20198 preset`, () => {
    const v456St20198Preset = v456St20198().build<TStandalonePriceDraft>();
    expect(v456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-8",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20198 preset when built for graphql`, () => {
    const v456St20198PresetGraphql =
      v456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-8",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
