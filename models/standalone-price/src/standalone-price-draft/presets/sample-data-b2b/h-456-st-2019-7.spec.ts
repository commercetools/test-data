import type { TStandalonePriceDraft } from '../../../types';
import h456St20197 from './h-456-st-2019-7';

describe(`with h456St20197 preset`, () => {
  it(`should return a h456St20197 preset`, () => {
    const h456St20197Preset = h456St20197().build<TStandalonePriceDraft>();
    expect(h456St20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-7",
        "sku": "h456-st-2019",
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

  it(`should return a h456St20197 preset when built for graphql`, () => {
    const h456St20197PresetGraphql =
      h456St20197().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-7",
        "sku": "h456-st-2019",
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
