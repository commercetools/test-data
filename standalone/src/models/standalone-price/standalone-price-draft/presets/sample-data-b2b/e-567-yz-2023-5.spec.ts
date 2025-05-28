import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20235 from './e-567-yz-2023-5';

describe(`with e567Yz20235 preset`, () => {
  it(`should return a e567Yz20235 preset`, () => {
    const e567Yz20235Preset = e567Yz20235().build<TStandalonePriceDraft>();
    expect(e567Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-5",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
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

  it(`should return a e567Yz20235 preset when built for graphql`, () => {
    const e567Yz20235PresetGraphql =
      e567Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-5",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
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
