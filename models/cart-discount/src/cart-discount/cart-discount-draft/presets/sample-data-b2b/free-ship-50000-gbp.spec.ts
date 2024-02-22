import type { TCartDiscountDraft } from '../../../types';
import freeShip50000Gbp from './free-ship-50000-gbp';

describe(`with freeShip50000Gbp preset`, () => {
  it(`should return a freeShip50000Gbp preset`, () => {
    const freeShip50000GbpPreset =
      freeShip50000Gbp().build<TCartDiscountDraft>();
    expect(freeShip50000GbpPreset).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice >= "50000 GBP"",
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Kostenloser Versand bei einer Bestellung von mindestens 50000 GBP",
          "en": undefined,
          "en-AU": "Free shipping when your order is at least 50000 GBP",
          "en-GB": "Free shipping when your order is at least 50000 GBP",
          "en-NZ": "Free shipping when your order is at least 50000 GBP",
          "en-US": "Free shipping when your order is at least 50000 GBP",
          "es-ES": "Envío gratuito en pedidos de al menos 50000 GBP",
          "fr": undefined,
          "fr-FR": "Livraison gratuite pour toute commande d&#39;au moins 50000 GBP",
          "it-IT": "Spedizione gratuita per ordini di almeno 50000 GBP",
          "nl-NL": "Gratis verzending bij een bestelling van ten minste 50000 GBP",
          "pt-PT": "Envio grátis em encomendas de pelo menos 50000 GBP",
        },
        "isActive": true,
        "key": "free-ship-50000-gbp",
        "name": {
          "de": undefined,
          "de-DE": "Kostenloser Versand ab einem Einkauf von 50000 GBP",
          "en": undefined,
          "en-AU": "Free Shipping when you spend 50000 GBP",
          "en-GB": "Free Shipping when you spend 50000 GBP",
          "en-NZ": "Free Shipping when you spend 50000 GBP",
          "en-US": "Free Shipping when you spend 50000 GBP",
          "es-ES": "Envío gratuito al gastar 50000 GBP",
          "fr": undefined,
          "fr-FR": "Livraison gratuite à partir de 50000 GBP d&#39;achat",
          "it-IT": "Spedizione gratuita per acquisti di almeno 50000 GBP",
          "nl-NL": "Gratis verzending bij besteding van 50000 GBP",
          "pt-PT": "Envio grátis ao gastar 50000 GBP",
        },
        "requiresDiscountCode": false,
        "sortOrder": "0.22",
        "stackingMode": "Stacking",
        "target": {
          "type": "shipping",
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "permyriad": 10000,
          "type": "relative",
        },
      }
    `);
  });

  it(`should return a freeShip50000Gbp preset when built for graphql`, () => {
    const freeShip50000GbpPresetGraphql =
      freeShip50000Gbp().buildGraphql<TCartDiscountDraft>();
    expect(freeShip50000GbpPresetGraphql).toMatchInlineSnapshot(`
      {
        "cartPredicate": "totalPrice >= "50000 GBP"",
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Kostenloser Versand bei einer Bestellung von mindestens 50000 GBP",
          },
          {
            "locale": "it-IT",
            "value": "Spedizione gratuita per ordini di almeno 50000 GBP",
          },
          {
            "locale": "nl-NL",
            "value": "Gratis verzending bij een bestelling van ten minste 50000 GBP",
          },
          {
            "locale": "fr-FR",
            "value": "Livraison gratuite pour toute commande d&#39;au moins 50000 GBP",
          },
          {
            "locale": "en-AU",
            "value": "Free shipping when your order is at least 50000 GBP",
          },
          {
            "locale": "es-ES",
            "value": "Envío gratuito en pedidos de al menos 50000 GBP",
          },
          {
            "locale": "en-GB",
            "value": "Free shipping when your order is at least 50000 GBP",
          },
          {
            "locale": "en-NZ",
            "value": "Free shipping when your order is at least 50000 GBP",
          },
          {
            "locale": "pt-PT",
            "value": "Envio grátis em encomendas de pelo menos 50000 GBP",
          },
          {
            "locale": "en-US",
            "value": "Free shipping when your order is at least 50000 GBP",
          },
        ],
        "isActive": true,
        "key": "free-ship-50000-gbp",
        "name": [
          {
            "locale": "de-DE",
            "value": "Kostenloser Versand ab einem Einkauf von 50000 GBP",
          },
          {
            "locale": "it-IT",
            "value": "Spedizione gratuita per acquisti di almeno 50000 GBP",
          },
          {
            "locale": "nl-NL",
            "value": "Gratis verzending bij besteding van 50000 GBP",
          },
          {
            "locale": "fr-FR",
            "value": "Livraison gratuite à partir de 50000 GBP d&#39;achat",
          },
          {
            "locale": "en-AU",
            "value": "Free Shipping when you spend 50000 GBP",
          },
          {
            "locale": "es-ES",
            "value": "Envío gratuito al gastar 50000 GBP",
          },
          {
            "locale": "en-GB",
            "value": "Free Shipping when you spend 50000 GBP",
          },
          {
            "locale": "en-NZ",
            "value": "Free Shipping when you spend 50000 GBP",
          },
          {
            "locale": "pt-PT",
            "value": "Envio grátis ao gastar 50000 GBP",
          },
          {
            "locale": "en-US",
            "value": "Free Shipping when you spend 50000 GBP",
          },
        ],
        "requiresDiscountCode": false,
        "sortOrder": "0.22",
        "stackingMode": "Stacking",
        "target": {
          "shipping": {},
        },
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "relative": {
            "permyriad": 10000,
          },
        },
      }
    `);
  });
});
