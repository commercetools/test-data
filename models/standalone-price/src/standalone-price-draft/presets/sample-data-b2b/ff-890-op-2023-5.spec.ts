import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20235 from './ff-890-op-2023-5';

describe(`with ff890Op20235 preset`, () => {
  it(`should return a ff890Op20235 preset`, () => {
    const ff890Op20235Preset = ff890Op20235().build<TStandalonePriceDraft>();
    expect(ff890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-5",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20235 preset when built for graphql`, () => {
    const ff890Op20235PresetGraphql =
      ff890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-5",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
