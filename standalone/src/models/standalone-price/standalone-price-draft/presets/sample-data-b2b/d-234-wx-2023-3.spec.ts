import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20233 from './d-234-wx-2023-3';

describe(`with d234Wx20233 preset`, () => {
  it(`should return a d234Wx20233 preset`, () => {
    const d234Wx20233Preset = d234Wx20233().build<TStandalonePriceDraft>();
    expect(d234Wx20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-3",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1386000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20233 preset when built for graphql`, () => {
    const d234Wx20233PresetGraphql =
      d234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-3",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1386000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
