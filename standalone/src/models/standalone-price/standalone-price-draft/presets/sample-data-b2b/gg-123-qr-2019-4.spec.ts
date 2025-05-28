import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20194 from './gg-123-qr-2019-4';

describe(`with gg123Qr20194 preset`, () => {
  it(`should return a gg123Qr20194 preset`, () => {
    const gg123Qr20194Preset = gg123Qr20194().build<TStandalonePriceDraft>();
    expect(gg123Qr20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1700000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a gg123Qr20194 preset when built for graphql`, () => {
    const gg123Qr20194PresetGraphql =
      gg123Qr20194().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-4",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1700000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
