import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20192 from './d-234-wx-2019-2';

describe(`with d234Wx20192 preset`, () => {
  it(`should return a d234Wx20192 preset`, () => {
    const d234Wx20192Preset = d234Wx20192().build<TStandalonePriceDraft>();
    expect(d234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-2",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20192 preset when built for graphql`, () => {
    const d234Wx20192PresetGraphql =
      d234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-2",
        "sku": "d234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
