import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20194 from './pp-234-wx-2019-4';

describe(`with pp234Wx20194 preset`, () => {
  it(`should return a pp234Wx20194 preset`, () => {
    const pp234Wx20194Preset = pp234Wx20194().build<TStandalonePriceDraft>();
    expect(pp234Wx20194Preset).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2019-4",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20194 preset when built for graphql`, () => {
    const pp234Wx20194PresetGraphql =
      pp234Wx20194().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2019-4",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
