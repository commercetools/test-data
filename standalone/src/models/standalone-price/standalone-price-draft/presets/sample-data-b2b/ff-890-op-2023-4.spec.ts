import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20234 from './ff-890-op-2023-4';

describe(`with ff890Op20234 preset`, () => {
  it(`should return a ff890Op20234 preset`, () => {
    const ff890Op20234Preset = ff890Op20234().build<TStandalonePriceDraft>();
    expect(ff890Op20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2023",
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

  it(`should return a ff890Op20234 preset when built for graphql`, () => {
    const ff890Op20234PresetGraphql =
      ff890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2023",
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
