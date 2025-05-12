import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20197 from './rr-890-op-2019-7';

describe(`with rr890Op20197 preset`, () => {
  it(`should return a rr890Op20197 preset`, () => {
    const rr890Op20197Preset = rr890Op20197().build<TStandalonePriceDraft>();
    expect(rr890Op20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-7",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20197 preset when built for graphql`, () => {
    const rr890Op20197PresetGraphql =
      rr890Op20197().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2019-7",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
