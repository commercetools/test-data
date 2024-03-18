import type { TCompanyDraft } from '../../../types';
import lifttechSolutionsLtdDe from './lifttech-solutions-ltd-de';

describe(`with lifttechSolutionsLtdDe preset`, () => {
  it(`should return a lifttechSolutionsLtdDe preset`, () => {
    const lifttechSolutionsLtdDePreset =
      lifttechSolutionsLtdDe().build<TCompanyDraft>();
    expect(lifttechSolutionsLtdDePreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "654",
            "building": "D",
            "city": "Berlin",
            "company": "LiftTech Solutions Ltd DE",
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-de",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "12345",
            "region": "Brandenburg",
            "salutation": undefined,
            "state": undefined,
            "streetName": "Hauptstraße",
            "streetNumber": "456",
            "title": undefined,
          },
        ],
        "associateMode": "Explicit",
        "associates": [
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "admin",
                  "typeId": "associate-role",
                },
                "inheritance": "Enabled",
              },
            ],
            "customer": {
              "key": "oliver-smith",
              "typeId": "customer",
            },
          },
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "approver",
                  "typeId": "associate-role",
                },
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "amelia-jones",
              "typeId": "customer",
            },
          },
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "buyer",
                  "typeId": "associate-role",
                },
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "william-taylor",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-de",
        "name": "LiftTech Lösungen GmbH",
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "Explicit",
        "stores": undefined,
        "unitType": "Company",
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDe preset when built for graphql`, () => {
    const lifttechSolutionsLtdDePresetGraphql =
      lifttechSolutionsLtdDe().buildGraphql<TCompanyDraft>();
    expect(lifttechSolutionsLtdDePresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "654",
            "building": "D",
            "city": "Berlin",
            "company": "LiftTech Solutions Ltd DE",
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-de",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "12345",
            "region": "Brandenburg",
            "salutation": undefined,
            "state": undefined,
            "streetName": "Hauptstraße",
            "streetNumber": "456",
            "title": undefined,
          },
        ],
        "associateMode": "Explicit",
        "associates": [
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "admin",
                  "typeId": "associate-role",
                },
                "inheritance": "Enabled",
              },
            ],
            "customer": {
              "key": "oliver-smith",
              "typeId": "customer",
            },
          },
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "approver",
                  "typeId": "associate-role",
                },
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "amelia-jones",
              "typeId": "customer",
            },
          },
          {
            "associateRoleAssignments": [
              {
                "associateRole": {
                  "key": "buyer",
                  "typeId": "associate-role",
                },
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "william-taylor",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-de",
        "name": "LiftTech Lösungen GmbH",
        "shippingAddresses": undefined,
        "storeMode": "Explicit",
        "stores": undefined,
        "unitType": "Company",
      }
    `);
  });
});
