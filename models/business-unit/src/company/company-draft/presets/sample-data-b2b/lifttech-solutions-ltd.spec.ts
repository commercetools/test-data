import type { TCompanyDraft } from '../../../types';
import lifttechSolutionsLtd from './lifttech-solutions-ltd';

describe(`with lifttechSolutionsLtd preset`, () => {
  it(`should return a lifttechSolutionsLtd preset`, () => {
    const lifttechSolutionsLtdPreset =
      lifttechSolutionsLtd().build<TCompanyDraft>();
    expect(lifttechSolutionsLtdPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Sherlock Holmes House",
            "apartment": "987",
            "building": "C",
            "city": "London",
            "company": "LiftTech Solutions Ltd",
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "SW1A 1AA",
            "region": "England",
            "salutation": undefined,
            "state": "London",
            "streetName": "Baker Street",
            "streetNumber": "221B",
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
        "contactEmail": "info@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd",
        "name": "LiftTech Solutions Ltd",
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "de-fr-uk",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });

  it(`should return a lifttechSolutionsLtd preset when built for graphql`, () => {
    const lifttechSolutionsLtdPresetGraphql =
      lifttechSolutionsLtd().buildGraphql<TCompanyDraft>();
    expect(lifttechSolutionsLtdPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Sherlock Holmes House",
            "apartment": "987",
            "building": "C",
            "city": "London",
            "company": "LiftTech Solutions Ltd",
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "SW1A 1AA",
            "region": "England",
            "salutation": undefined,
            "state": "London",
            "streetName": "Baker Street",
            "streetNumber": "221B",
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
        "contactEmail": "info@ltsl.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd",
        "name": "LiftTech Solutions Ltd",
        "shippingAddresses": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "de-fr-uk",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });
});
