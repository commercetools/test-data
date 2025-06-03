import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20191 from './r-123-ts-2019-1';

describe(`with r123Ts20191 preset`, () => {
  it(`should return a r123Ts20191 preset`, () => {
    const r123Ts20191Preset = r123Ts20191().build<TStandalonePriceDraft>();
    expect(r123Ts20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-1",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20191 preset when built for graphql`, () => {
    const r123Ts20191PresetGraphql =
      r123Ts20191().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-1",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
