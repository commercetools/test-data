import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20151 from './j-234-wx-2015-1';

describe(`with j234Wx20151 preset`, () => {
  it(`should return a j234Wx20151 preset`, () => {
    const j234Wx20151Preset = j234Wx20151().build<TStandalonePriceDraft>();
    expect(j234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a j234Wx20151 preset when built for graphql`, () => {
    const j234Wx20151PresetGraphql =
      j234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
