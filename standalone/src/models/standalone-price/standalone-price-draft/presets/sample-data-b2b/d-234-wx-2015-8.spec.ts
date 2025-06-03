import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20158 from './d-234-wx-2015-8';

describe(`with d234Wx20158 preset`, () => {
  it(`should return a d234Wx20158 preset`, () => {
    const d234Wx20158Preset = d234Wx20158().build<TStandalonePriceDraft>();
    expect(d234Wx20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-8",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a d234Wx20158 preset when built for graphql`, () => {
    const d234Wx20158PresetGraphql =
      d234Wx20158().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2015-8",
        "recurrencePolicy": undefined,
        "sku": "d234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
