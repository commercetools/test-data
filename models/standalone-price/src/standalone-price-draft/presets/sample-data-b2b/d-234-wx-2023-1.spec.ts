import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20231 from './d-234-wx-2023-1';

describe(`with d234Wx20231 preset`, () => {
  it(`should return a d234Wx20231 preset`, () => {
    const d234Wx20231Preset = d234Wx20231().build<TStandalonePriceDraft>();
    expect(d234Wx20231Preset).toMatchInlineSnapshot(`
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
        "key": "d234-wx-2023-1",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1188000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a d234Wx20231 preset when built for graphql`, () => {
    const d234Wx20231PresetGraphql =
      d234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "d234-wx-2023-1",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1188000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
