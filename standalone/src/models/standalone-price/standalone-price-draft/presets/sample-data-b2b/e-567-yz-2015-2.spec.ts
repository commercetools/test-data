import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20152 from './e-567-yz-2015-2';

describe(`with e567Yz20152 preset`, () => {
  it(`should return a e567Yz20152 preset`, () => {
    const e567Yz20152Preset = e567Yz20152().build<TStandalonePriceDraft>();
    expect(e567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a e567Yz20152 preset when built for graphql`, () => {
    const e567Yz20152PresetGraphql =
      e567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
