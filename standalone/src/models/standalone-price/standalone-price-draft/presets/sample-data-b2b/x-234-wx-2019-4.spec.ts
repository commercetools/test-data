import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20194 from './x-234-wx-2019-4';

describe(`with x234Wx20194 preset`, () => {
  it(`should return a x234Wx20194 preset`, () => {
    const x234Wx20194Preset = x234Wx20194().build<TStandalonePriceDraft>();
    expect(x234Wx20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-4",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x234Wx20194 preset when built for graphql`, () => {
    const x234Wx20194PresetGraphql =
      x234Wx20194().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-4",
        "recurrencePolicy": undefined,
        "sku": "x234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
