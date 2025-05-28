import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20197 from './y-567-yz-2019-7';

describe(`with y567Yz20197 preset`, () => {
  it(`should return a y567Yz20197 preset`, () => {
    const y567Yz20197Preset = y567Yz20197().build<TStandalonePriceDraft>();
    expect(y567Yz20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2760000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20197 preset when built for graphql`, () => {
    const y567Yz20197PresetGraphql =
      y567Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2760000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
