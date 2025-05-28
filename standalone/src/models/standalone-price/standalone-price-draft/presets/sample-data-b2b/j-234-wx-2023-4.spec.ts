import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20234 from './j-234-wx-2023-4';

describe(`with j234Wx20234 preset`, () => {
  it(`should return a j234Wx20234 preset`, () => {
    const j234Wx20234Preset = j234Wx20234().build<TStandalonePriceDraft>();
    expect(j234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a j234Wx20234 preset when built for graphql`, () => {
    const j234Wx20234PresetGraphql =
      j234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
