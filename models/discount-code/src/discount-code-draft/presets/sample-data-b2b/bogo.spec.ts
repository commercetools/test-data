import type { TDiscountCodeDraft } from '../../../types';
import bogo from './bogo';

describe(`with bogo preset`, () => {
  it(`should return a bogo preset`, () => {
    const bogoPreset = bogo('1').build<TDiscountCodeDraft>();
    expect(bogoPreset).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "id": "1",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": undefined,
        "groups": undefined,
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": {
          "de": undefined,
          "de-DE": "BOGO",
          "en": undefined,
          "en-AU": "BOGO",
          "en-GB": "BOGO",
          "en-NZ": "BOGO",
          "en-US": "BOGO",
          "es-ES": "BOGO",
          "fr": undefined,
          "fr-FR": "BOGO",
          "it-IT": "BOGO",
          "nl-NL": "BOGO",
          "pt-PT": "BOGO",
        },
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });

  it(`should return a bogo preset when built for graphql`, () => {
    const bogoPresetGraphql = bogo('1').buildGraphql<TDiscountCodeDraft>();
    expect(bogoPresetGraphql).toMatchInlineSnapshot(`
      {
        "cartDiscounts": [
          {
            "id": "1",
            "typeId": "cart-discount",
          },
        ],
        "cartPredicate": undefined,
        "code": "BOGO",
        "custom": undefined,
        "description": undefined,
        "groups": undefined,
        "isActive": true,
        "maxApplications": 1,
        "maxApplicationsPerCustomer": 1,
        "name": [
          {
            "locale": "de-DE",
            "value": "BOGO",
          },
          {
            "locale": "it-IT",
            "value": "BOGO",
          },
          {
            "locale": "nl-NL",
            "value": "BOGO",
          },
          {
            "locale": "fr-FR",
            "value": "BOGO",
          },
          {
            "locale": "en-AU",
            "value": "BOGO",
          },
          {
            "locale": "es-ES",
            "value": "BOGO",
          },
          {
            "locale": "en-GB",
            "value": "BOGO",
          },
          {
            "locale": "en-NZ",
            "value": "BOGO",
          },
          {
            "locale": "pt-PT",
            "value": "BOGO",
          },
          {
            "locale": "en-US",
            "value": "BOGO",
          },
        ],
        "validFrom": undefined,
        "validUntil": undefined,
      }
    `);
  });
});
