import type { TStandalonePriceDraft } from '../../../types';
import v456St20197 from './v-456-st-2019-7';

describe(`with v456St20197 preset`, () => {
  it(`should return a v456St20197 preset`, () => {
    const v456St20197Preset = v456St20197().build<TStandalonePriceDraft>();
    expect(v456St20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-7",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20197 preset when built for graphql`, () => {
    const v456St20197PresetGraphql =
      v456St20197().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-7",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
