import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20191 from './gg-123-qr-2019-1';

describe(`with gg123Qr20191 preset`, () => {
  it(`should return a gg123Qr20191 preset`, () => {
    const gg123Qr20191Preset = gg123Qr20191().build<TStandalonePriceDraft>();
    expect(gg123Qr20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2057001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a gg123Qr20191 preset when built for graphql`, () => {
    const gg123Qr20191PresetGraphql =
      gg123Qr20191().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2019-1",
        "recurrencePolicy": undefined,
        "sku": "gg123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2057001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
