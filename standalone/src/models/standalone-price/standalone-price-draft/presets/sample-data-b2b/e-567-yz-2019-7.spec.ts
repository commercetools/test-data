import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20197 from './e-567-yz-2019-7';

describe(`with e567Yz20197 preset`, () => {
  it(`should return a e567Yz20197 preset`, () => {
    const e567Yz20197Preset = e567Yz20197().build<TStandalonePriceDraft>();
    expect(e567Yz20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20197 preset when built for graphql`, () => {
    const e567Yz20197PresetGraphql =
      e567Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
