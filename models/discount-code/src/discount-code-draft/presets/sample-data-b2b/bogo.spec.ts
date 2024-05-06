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
        "description": {
          "de": undefined,
          "de-DE": "Kaufen Sie einen und erhalten Sie den zweiten kostenlos",
          "en": undefined,
          "en-AU": "Buy One and Receive the Second for Free",
          "en-GB": "Buy One and Receive the Second for Free",
          "en-NZ": "Buy One and Receive the Second for Free",
          "en-US": "Buy One and Receive the Second for Free",
          "es-ES": "Compra uno y recibe el segundo gratis",
          "fr": undefined,
          "fr-FR": "Achetez-en un et recevez le deuxième gratuitement",
          "it-IT": "Compra uno e ricevi il secondo gratis",
          "nl-NL": "Koop er één en krijg de tweede gratis",
          "pt-PT": "Compre um e receba o segundo de graça",
        },
        "groups": undefined,
        "isActive": true,
        "maxApplications": undefined,
        "maxApplicationsPerCustomer": 5,
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Kaufen Sie einen und erhalten Sie den zweiten kostenlos",
          },
          {
            "locale": "it-IT",
            "value": "Compra uno e ricevi il secondo gratis",
          },
          {
            "locale": "nl-NL",
            "value": "Koop er één en krijg de tweede gratis",
          },
          {
            "locale": "fr-FR",
            "value": "Achetez-en un et recevez le deuxième gratuitement",
          },
          {
            "locale": "en-AU",
            "value": "Buy One and Receive the Second for Free",
          },
          {
            "locale": "es-ES",
            "value": "Compra uno y recibe el segundo gratis",
          },
          {
            "locale": "en-GB",
            "value": "Buy One and Receive the Second for Free",
          },
          {
            "locale": "en-NZ",
            "value": "Buy One and Receive the Second for Free",
          },
          {
            "locale": "pt-PT",
            "value": "Compre um e receba o segundo de graça",
          },
          {
            "locale": "en-US",
            "value": "Buy One and Receive the Second for Free",
          },
        ],
        "groups": undefined,
        "isActive": true,
        "maxApplications": undefined,
        "maxApplicationsPerCustomer": 5,
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
