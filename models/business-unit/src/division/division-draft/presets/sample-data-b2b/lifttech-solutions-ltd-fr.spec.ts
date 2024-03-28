import type { TDivisionDraft } from '../../../types';
import lifttechSolutionsLtdFr from './lifttech-solutions-ltd-fr';

describe(`with lifttechSolutionsLtdFr preset`, () => {
  it(`should return a lifttechSolutionsLtdFr preset`, () => {
    const lifttechSolutionsLtdFrPreset =
      lifttechSolutionsLtdFr().build<TDivisionDraft>();
    expect(lifttechSolutionsLtdFrPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Étage 4",
            "apartment": "321",
            "building": "E",
            "city": "Paris",
            "company": "LiftTech Solutions Ltd FR",
            "country": "FR",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-fr",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "75002",
            "region": "Île-de-France",
            "salutation": undefined,
            "state": "Île-de-France",
            "streetName": "Rue de la Paix",
            "streetNumber": "789",
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
              "key": "lucas-dubois",
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
              "key": "camille-lefevre",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info.fr@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-fr",
        "name": "LiftTech Solutions SARL",
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

  it(`should return a lifttechSolutionsLtdFr preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrPresetGraphql =
      lifttechSolutionsLtdFr().buildGraphql<TDivisionDraft>();
    expect(lifttechSolutionsLtdFrPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Étage 4",
            "apartment": "321",
            "building": "E",
            "city": "Paris",
            "company": "LiftTech Solutions Ltd FR",
            "country": "FR",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-fr",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "75002",
            "region": "Île-de-France",
            "salutation": undefined,
            "state": "Île-de-France",
            "streetName": "Rue de la Paix",
            "streetNumber": "789",
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
              "key": "lucas-dubois",
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
              "key": "camille-lefevre",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info.fr@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-fr",
        "name": "LiftTech Solutions SARL",
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
