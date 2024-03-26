import type { TStoreDraft } from '../../../types';
import usMediumCustomers from './us-medium-customers';

describe(`with usMediumCustomers preset`, () => {
  it(`should return a usMediumCustomers preset`, () => {
    const usMediumCustomersPreset = usMediumCustomers().build<TStoreDraft>();
    expect(usMediumCustomersPreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-medium-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-medium-customers",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "US-Mittelgroße Kunden",
          "en": undefined,
          "en-AU": "US Medium Customers",
          "en-GB": "US Medium Customers",
          "en-NZ": "US Medium Customers",
          "en-US": "US Medium Customers",
          "es-ES": "Clientes Medianos de EE. UU.",
          "fr": undefined,
          "fr-FR": "Clients Moyens des États-Unis",
          "it-IT": "Clienti Medi degli Stati Uniti",
          "nl-NL": "Middelgrote Klanten in de VS",
          "pt-PT": "Clientes Médios dos EUA",
        },
        "productSelections": undefined,
        "supplyChannels": [
          {
            "key": "us-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a usMediumCustomers preset when built for graphql`, () => {
    const usMediumCustomersPresetGraphql =
      usMediumCustomers().buildGraphql<TStoreDraft>();
    expect(usMediumCustomersPresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "us-medium-customers",
            "typeId": "channel",
          },
        ],
        "key": "us-medium-customers",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "US-Mittelgroße Kunden",
          },
          {
            "locale": "it-IT",
            "value": "Clienti Medi degli Stati Uniti",
          },
          {
            "locale": "nl-NL",
            "value": "Middelgrote Klanten in de VS",
          },
          {
            "locale": "fr-FR",
            "value": "Clients Moyens des États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Medium Customers",
          },
          {
            "locale": "es-ES",
            "value": "Clientes Medianos de EE. UU.",
          },
          {
            "locale": "en-GB",
            "value": "US Medium Customers",
          },
          {
            "locale": "en-NZ",
            "value": "US Medium Customers",
          },
          {
            "locale": "pt-PT",
            "value": "Clientes Médios dos EUA",
          },
          {
            "locale": "en-US",
            "value": "US Medium Customers",
          },
        ],
        "productSelections": undefined,
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
