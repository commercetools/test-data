import type { TStandalonePriceDraft } from '../../../types';
import f890Op20197 from './f-890-op-2019-7';

describe(`with f890Op20197 preset`, () => {
  it(`should return a f890Op20197 preset`, () => {
    const f890Op20197Preset = f890Op20197().build<TStandalonePriceDraft>();
    expect(f890Op20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-7",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20197 preset when built for graphql`, () => {
    const f890Op20197PresetGraphql =
      f890Op20197().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-7",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
