import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20234 from './e-567-yz-2023-4';

describe(`with e567Yz20234 preset`, () => {
  it(`should return a e567Yz20234 preset`, () => {
    const e567Yz20234Preset = e567Yz20234().build<TStandalonePriceDraft>();
    expect(e567Yz20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a e567Yz20234 preset when built for graphql`, () => {
    const e567Yz20234PresetGraphql =
      e567Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-4",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
