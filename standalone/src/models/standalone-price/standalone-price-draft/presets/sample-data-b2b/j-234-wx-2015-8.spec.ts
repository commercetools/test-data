import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20158 from './j-234-wx-2015-8';

describe(`with j234Wx20158 preset`, () => {
  it(`should return a j234Wx20158 preset`, () => {
    const j234Wx20158Preset = j234Wx20158().build<TStandalonePriceDraft>();
    expect(j234Wx20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-8",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20158 preset when built for graphql`, () => {
    const j234Wx20158PresetGraphql =
      j234Wx20158().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-8",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
