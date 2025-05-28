import type { TStandalonePriceDraft } from '../../../types';
import z890Op20197 from './z-890-op-2019-7';

describe(`with z890Op20197 preset`, () => {
  it(`should return a z890Op20197 preset`, () => {
    const z890Op20197Preset = z890Op20197().build<TStandalonePriceDraft>();
    expect(z890Op20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-7",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3240000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a z890Op20197 preset when built for graphql`, () => {
    const z890Op20197PresetGraphql =
      z890Op20197().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-7",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3240000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
