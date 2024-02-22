import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20193 from './d-234-wx-2019-3';

describe(`with d234Wx20193 preset`, () => {
  it(`should return a d234Wx20193 preset`, () => {
    const d234Wx20193Preset = d234Wx20193().build<TStandalonePriceDraft>();
    expect(d234Wx20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-3",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1287000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20193 preset when built for graphql`, () => {
    const d234Wx20193PresetGraphql =
      d234Wx20193().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-3",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1287000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
