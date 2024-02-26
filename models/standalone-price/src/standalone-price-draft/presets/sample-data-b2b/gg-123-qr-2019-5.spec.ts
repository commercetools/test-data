import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20195 from './gg-123-qr-2019-5';

describe(`with gg123Qr20195 preset`, () => {
  it(`should return a gg123Qr20195 preset`, () => {
    const gg123Qr20195Preset = gg123Qr20195().build<TStandalonePriceDraft>();
    expect(gg123Qr20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-5",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1530000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20195 preset when built for graphql`, () => {
    const gg123Qr20195PresetGraphql =
      gg123Qr20195().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-5",
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1530000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
