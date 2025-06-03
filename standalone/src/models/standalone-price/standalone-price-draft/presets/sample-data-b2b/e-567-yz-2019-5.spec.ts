import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20195 from './e-567-yz-2019-5';

describe(`with e567Yz20195 preset`, () => {
  it(`should return a e567Yz20195 preset`, () => {
    const e567Yz20195Preset = e567Yz20195().build<TStandalonePriceDraft>();
    expect(e567Yz20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-5",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2019",
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

  it(`should return a e567Yz20195 preset when built for graphql`, () => {
    const e567Yz20195PresetGraphql =
      e567Yz20195().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-5",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2019",
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
