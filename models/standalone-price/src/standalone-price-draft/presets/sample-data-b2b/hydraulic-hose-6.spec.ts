import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose6 from './hydraulic-hose-6';

describe(`with hydraulicHose6 preset`, () => {
  it(`should return a hydraulicHose6 preset`, () => {
    const hydraulicHose6Preset =
      hydraulicHose6().build<TStandalonePriceDraft>();
    expect(hydraulicHose6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-6",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hydraulicHose6 preset when built for graphql`, () => {
    const hydraulicHose6PresetGraphql =
      hydraulicHose6().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-6",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
