import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20236 from './jj-234-wx-2023-6';

describe(`with jj234Wx20236 preset`, () => {
  it(`should return a jj234Wx20236 preset`, () => {
    const jj234Wx20236Preset = jj234Wx20236().build<TStandalonePriceDraft>();
    expect(jj234Wx20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-6",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20236 preset when built for graphql`, () => {
    const jj234Wx20236PresetGraphql =
      jj234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2023-6",
        "sku": "jj234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
