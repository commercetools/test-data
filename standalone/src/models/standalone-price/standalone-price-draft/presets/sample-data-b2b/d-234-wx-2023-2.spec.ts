import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20232 from './d-234-wx-2023-2';

describe(`with d234Wx20232 preset`, () => {
  it(`should return a d234Wx20232 preset`, () => {
    const d234Wx20232Preset = d234Wx20232().build<TStandalonePriceDraft>();
    expect(d234Wx20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20232 preset when built for graphql`, () => {
    const d234Wx20232PresetGraphql =
      d234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-2",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
