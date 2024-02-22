import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20194 from './j-234-wx-2019-4';

describe(`with j234Wx20194 preset`, () => {
  it(`should return a j234Wx20194 preset`, () => {
    const j234Wx20194Preset = j234Wx20194().build<TStandalonePriceDraft>();
    expect(j234Wx20194Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2019-4",
        "sku": "j234-wx-2019",
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

  it(`should return a j234Wx20194 preset when built for graphql`, () => {
    const j234Wx20194PresetGraphql =
      j234Wx20194().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2019-4",
        "sku": "j234-wx-2019",
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
