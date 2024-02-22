import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20231 from './jj-234-wx-2023-1';

describe(`with jj234Wx20231 preset`, () => {
  it(`should return a jj234Wx20231 preset`, () => {
    const jj234Wx20231Preset = jj234Wx20231().build<TStandalonePriceDraft>();
    expect(jj234Wx20231Preset).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2023-1",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jj234Wx20231 preset when built for graphql`, () => {
    const jj234Wx20231PresetGraphql =
      jj234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2023-1",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
