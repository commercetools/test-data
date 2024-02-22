import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20197 from './ff-890-op-2019-7';

describe(`with ff890Op20197 preset`, () => {
  it(`should return a ff890Op20197 preset`, () => {
    const ff890Op20197Preset = ff890Op20197().build<TStandalonePriceDraft>();
    expect(ff890Op20197Preset).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2019-7",
        "sku": "ff890-op-2019",
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

  it(`should return a ff890Op20197 preset when built for graphql`, () => {
    const ff890Op20197PresetGraphql =
      ff890Op20197().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2019-7",
        "sku": "ff890-op-2019",
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
