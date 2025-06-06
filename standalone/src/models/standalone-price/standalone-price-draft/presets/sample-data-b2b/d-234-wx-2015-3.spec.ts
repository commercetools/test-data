import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20153 from './d-234-wx-2015-3';

describe(`with d234Wx20153 preset`, () => {
  it(`should return a d234Wx20153 preset`, () => {
    const d234Wx20153Preset = d234Wx20153().build<TStandalonePriceDraft>();
    expect(d234Wx20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-3",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1188000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20153 preset when built for graphql`, () => {
    const d234Wx20153PresetGraphql =
      d234Wx20153().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-3",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1188000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
