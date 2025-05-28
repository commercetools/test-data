import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20235 from './r-123-ts-2023-5';

describe(`with r123Ts20235 preset`, () => {
  it(`should return a r123Ts20235 preset`, () => {
    const r123Ts20235Preset = r123Ts20235().build<TStandalonePriceDraft>();
    expect(r123Ts20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-5",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20235 preset when built for graphql`, () => {
    const r123Ts20235PresetGraphql =
      r123Ts20235().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2023-5",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
