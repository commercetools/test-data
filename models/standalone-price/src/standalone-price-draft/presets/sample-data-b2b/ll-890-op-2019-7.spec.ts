import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20197 from './ll-890-op-2019-7';

describe(`with ll890Op20197 preset`, () => {
  it(`should return a ll890Op20197 preset`, () => {
    const ll890Op20197Preset = ll890Op20197().build<TStandalonePriceDraft>();
    expect(ll890Op20197Preset).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2019-7",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20197 preset when built for graphql`, () => {
    const ll890Op20197PresetGraphql =
      ll890Op20197().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2019-7",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
