import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20151 from './d-234-wx-2015-1';

describe(`with d234Wx20151 preset`, () => {
  it(`should return a d234Wx20151 preset`, () => {
    const d234Wx20151Preset = d234Wx20151().build<TStandalonePriceDraft>();
    expect(d234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a d234Wx20151 preset when built for graphql`, () => {
    const d234Wx20151PresetGraphql =
      d234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-1",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
