import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20153 from './gg-123-qr-2015-3';

describe(`with gg123Qr20153 preset`, () => {
  it(`should return a gg123Qr20153 preset`, () => {
    const gg123Qr20153Preset = gg123Qr20153().build<TStandalonePriceDraft>();
    expect(gg123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2244000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20153 preset when built for graphql`, () => {
    const gg123Qr20153PresetGraphql =
      gg123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2244000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
