import type { TDivisionDraft } from '../../../types';
import lifttechSolutionsLtdDe from './lifttech-solutions-ltd-de';

describe(`with lifttechSolutionsLtdDe preset`, () => {
  it(`should return a lifttechSolutionsLtdDe preset`, () => {
    const lifttechSolutionsLtdDePreset =
      lifttechSolutionsLtdDe().build<TDivisionDraft>();
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
        "associateMode": "ExplicitAndFromParent",
        "associates": [
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
              "key": "lukas-schmidt",
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
              "key": "sophie-mueller",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info.de@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-de",
        "name": "LiftTech Lösungen GmbH",
        "parentUnit": {
          "key": "lifttech-solutions-ltd",
          "typeId": "business-unit",
        },
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "FromParent",
        "stores": undefined,
        "unitType": "Division",
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDe preset when built for graphql`, () => {
    const lifttechSolutionsLtdDePresetGraphql =
      lifttechSolutionsLtdDe().buildGraphql<TDivisionDraft>();
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
        "associateMode": "ExplicitAndFromParent",
        "associates": [
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
              "key": "lukas-schmidt",
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
              "key": "sophie-mueller",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info.de@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-de",
        "name": "LiftTech Lösungen GmbH",
        "parentUnit": {
          "key": "lifttech-solutions-ltd",
          "typeId": "business-unit",
        },
        "shippingAddresses": undefined,
        "storeMode": "FromParent",
        "stores": undefined,
        "unitType": "Division",
      }
    `);
  });
});
