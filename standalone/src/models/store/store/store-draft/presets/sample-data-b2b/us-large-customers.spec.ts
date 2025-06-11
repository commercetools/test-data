import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './us-large-customers';

describe(`with usLargeCustomers preset`, () => {
  it(`should return a usLargeCustomers preset rest`, () => {
    const usLargeCustomersPreset = restPreset().build<TStoreDraftRest>();

    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-large-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-large-customers",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "US-Großkunden",
          "en": undefined,
          "en-AU": "US Large Customers",
          "en-GB": "US Large Customers",
          "en-NZ": "US Large Customers",
          "en-US": "US Large Customers",
          "es-ES": "Grandes Clientes de EE. UU.",
          "fr": undefined,
          "fr-FR": "Grands Clients des États-Unis",
          "it-IT": "Grandi Clienti degli Stati Uniti",
          "nl-NL": "Grote Klanten in de VS",
          "pt-PT": "Grandes Clientes dos EUA",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "us-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset when built for graphql`, () => {
    const usLargeCustomersPresetGraphql =
      graphqlPreset().build<TStoreDraftGraphql>();
    expect(usLargeCustomersPresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-large-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-large-customers",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "US-Großkunden",
          },
          {
            "locale": "it-IT",
            "value": "Grandi Clienti degli Stati Uniti",
          },
          {
            "locale": "nl-NL",
            "value": "Grote Klanten in de VS",
          },
          {
            "locale": "fr-FR",
            "value": "Grands Clients des États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Large Customers",
          },
          {
            "locale": "es-ES",
            "value": "Grandes Clientes de EE. UU.",
          },
          {
            "locale": "en-GB",
            "value": "US Large Customers",
          },
          {
            "locale": "en-NZ",
            "value": "US Large Customers",
          },
          {
            "locale": "pt-PT",
            "value": "Grandes Clientes dos EUA",
          },
          {
            "locale": "en-US",
            "value": "US Large Customers",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "us-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset`, () => {
    const usLargeCustomersPreset = compatPreset().buildRest<TStoreDraftRest>();

    expect(usLargeCustomersPreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-large-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-large-customers",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "US-Großkunden",
          "en": undefined,
          "en-AU": "US Large Customers",
          "en-GB": "US Large Customers",
          "en-NZ": "US Large Customers",
          "en-US": "US Large Customers",
          "es-ES": "Grandes Clientes de EE. UU.",
          "fr": undefined,
          "fr-FR": "Grands Clients des États-Unis",
          "it-IT": "Grandi Clienti degli Stati Uniti",
          "nl-NL": "Grote Klanten in de VS",
          "pt-PT": "Grandes Clientes dos EUA",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "us-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a usLargeCustomers preset when built for graphql legacy`, () => {
    const usLargeCustomersPresetGraphql =
      compatPreset().buildGraphql<TStoreDraftGraphql>();
    expect(usLargeCustomersPresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-large-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-large-customers",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "US-Großkunden",
          },
          {
            "locale": "it-IT",
            "value": "Grandi Clienti degli Stati Uniti",
          },
          {
            "locale": "nl-NL",
            "value": "Grote Klanten in de VS",
          },
          {
            "locale": "fr-FR",
            "value": "Grands Clients des États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Large Customers",
          },
          {
            "locale": "es-ES",
            "value": "Grandes Clientes de EE. UU.",
          },
          {
            "locale": "en-GB",
            "value": "US Large Customers",
          },
          {
            "locale": "en-NZ",
            "value": "US Large Customers",
          },
          {
            "locale": "pt-PT",
            "value": "Grandes Clientes dos EUA",
          },
          {
            "locale": "en-US",
            "value": "US Large Customers",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "us-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });
});
