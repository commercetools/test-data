import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20194 from './dd-234-wx-2019-4';

describe(`with dd234Wx20194 preset`, () => {
  it(`should return a dd234Wx20194 preset`, () => {
    const dd234Wx20194Preset = dd234Wx20194().build<TStandalonePriceDraft>();
    expect(dd234Wx20194Preset).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2019-4",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a dd234Wx20194 preset when built for graphql`, () => {
    const dd234Wx20194PresetGraphql =
      dd234Wx20194().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2019-4",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
