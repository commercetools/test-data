import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20233 from './jj-234-wx-2023-3';

describe(`with jj234Wx20233 preset`, () => {
  it(`should return a jj234Wx20233 preset`, () => {
    const jj234Wx20233Preset = jj234Wx20233().build<TStandalonePriceDraft>();
    expect(jj234Wx20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-3",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jj234Wx20233 preset when built for graphql`, () => {
    const jj234Wx20233PresetGraphql =
      jj234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-3",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
