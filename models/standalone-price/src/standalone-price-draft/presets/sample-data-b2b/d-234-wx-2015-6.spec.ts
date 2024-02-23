import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20156 from './d-234-wx-2015-6';

describe(`with d234Wx20156 preset`, () => {
  it(`should return a d234Wx20156 preset`, () => {
    const d234Wx20156Preset = d234Wx20156().build<TStandalonePriceDraft>();
    expect(d234Wx20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-6",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 720000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20156 preset when built for graphql`, () => {
    const d234Wx20156PresetGraphql =
      d234Wx20156().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-6",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 720000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
