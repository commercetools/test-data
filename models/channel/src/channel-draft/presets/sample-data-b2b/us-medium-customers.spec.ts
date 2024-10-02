import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import {
  ChannelDraft,
  ChannelDraftGraphql,
  ChannelDraftRest,
} from '../../index';

describe(`with usMediumCustomers preset`, () => {
  it(`should return a usMediumCustomers preset when built for rest`, () => {
    const usMediumCustomersPreset = ChannelDraftRest.presets
      .usMediumCustomers()
      .build();
    expect(usMediumCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-medium-customers",
        "name": {
          "de": undefined,
          "de-DE": "Mittelgroße Kunden im Vereinigten Staaten",
          "en": undefined,
          "en-AU": "US Medium Customers",
          "en-GB": "US Medium Customers",
          "en-NZ": "US Medium Customers",
          "en-US": "US Medium Customers",
          "es-ES": "Clientes Medianos de Estados Unidos",
          "fr": undefined,
          "fr-FR": "Clients Moyens aux États-Unis",
          "it-IT": "Clienti Medi USA",
          "nl-NL": "VS Middelgrote Klanten",
          "pt-PT": "Clientes Médios EUA",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usMediumCustomers preset when built for graphql`, () => {
    const usMediumCustomersPreset = ChannelDraftGraphql.presets
      .usMediumCustomers()
      .build();
    expect(usMediumCustomersPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-medium-customers",
        "name": [
          {
            "locale": "de-DE",
            "value": "Mittelgroße Kunden im Vereinigten Staaten",
          },
          {
            "locale": "it-IT",
            "value": "Clienti Medi USA",
          },
          {
            "locale": "nl-NL",
            "value": "VS Middelgrote Klanten",
          },
          {
            "locale": "fr-FR",
            "value": "Clients Moyens aux États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Medium Customers",
          },
          {
            "locale": "es-ES",
            "value": "Clientes Medianos de Estados Unidos",
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
            "value": "Clientes Médios EUA",
          },
          {
            "locale": "en-US",
            "value": "US Medium Customers",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usMediumCustomers preset when built for legacy rest`, () => {
    const usMediumCustomersPreset = ChannelDraft.presets
      .usMediumCustomers()
      .buildRest<TChannelDraftRest>();
    expect(usMediumCustomersPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-medium-customers",
        "name": {
          "de": undefined,
          "de-DE": "Mittelgroße Kunden im Vereinigten Staaten",
          "en": undefined,
          "en-AU": "US Medium Customers",
          "en-GB": "US Medium Customers",
          "en-NZ": "US Medium Customers",
          "en-US": "US Medium Customers",
          "es-ES": "Clientes Medianos de Estados Unidos",
          "fr": undefined,
          "fr-FR": "Clients Moyens aux États-Unis",
          "it-IT": "Clienti Medi USA",
          "nl-NL": "VS Middelgrote Klanten",
          "pt-PT": "Clientes Médios EUA",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a usMediumCustomers preset when built for legacy graphql`, () => {
    const usMediumCustomersPreset = ChannelDraft.presets
      .usMediumCustomers()
      .buildGraphql<TChannelDraftGraphql>();
    expect(usMediumCustomersPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-medium-customers",
        "name": [
          {
            "locale": "de-DE",
            "value": "Mittelgroße Kunden im Vereinigten Staaten",
          },
          {
            "locale": "it-IT",
            "value": "Clienti Medi USA",
          },
          {
            "locale": "nl-NL",
            "value": "VS Middelgrote Klanten",
          },
          {
            "locale": "fr-FR",
            "value": "Clients Moyens aux États-Unis",
          },
          {
            "locale": "en-AU",
            "value": "US Medium Customers",
          },
          {
            "locale": "es-ES",
            "value": "Clientes Medianos de Estados Unidos",
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
            "value": "Clientes Médios EUA",
          },
          {
            "locale": "en-US",
            "value": "US Medium Customers",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
