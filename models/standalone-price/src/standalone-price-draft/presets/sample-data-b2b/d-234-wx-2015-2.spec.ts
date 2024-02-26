import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20152 from './d-234-wx-2015-2';

describe(`with d234Wx20152 preset`, () => {
  it(`should return a d234Wx20152 preset`, () => {
    const d234Wx20152Preset = d234Wx20152().build<TStandalonePriceDraft>();
    expect(d234Wx20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-2",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 891000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20152 preset when built for graphql`, () => {
    const d234Wx20152PresetGraphql =
      d234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-2",
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 891000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
