import type { TDivisionDraft } from '../../../types';
import lifttechSolutionsLtdEs from './lifttech-solutions-ltd-es';

describe(`with lifttechSolutionsLtdEs preset`, () => {
  it(`should return a lifttechSolutionsLtdEs preset`, () => {
    const lifttechSolutionsLtdEsPreset =
      lifttechSolutionsLtdEs().build<TDivisionDraft>();
    expect(lifttechSolutionsLtdEsPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "567",
            "building": "F",
            "city": "Madrid",
            "company": "LiftTech Solutions Ltd ES",
            "country": "ES",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-es",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "28013",
            "region": "Community of Madrid",
            "salutation": undefined,
            "state": undefined,
            "streetName": "Calle Mayor",
            "streetNumber": "101",
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
              "key": "carlos-garcia",
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
              "key": "sofia-lopez",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-es",
        "name": "LiftTech Soluciones S.L.",
        "parentUnit": {
          "key": "lifttech-solutions-ltd",
          "typeId": "business-unit",
        },
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "spain",
            "typeId": "store",
          },
        ],
        "unitType": "Division",
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEs preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsPresetGraphql =
      lifttechSolutionsLtdEs().buildGraphql<TDivisionDraft>();
    expect(lifttechSolutionsLtdEsPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "567",
            "building": "F",
            "city": "Madrid",
            "company": "LiftTech Solutions Ltd ES",
            "country": "ES",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "lifttech-solutions-ltd-es",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "28013",
            "region": "Community of Madrid",
            "salutation": undefined,
            "state": undefined,
            "streetName": "Calle Mayor",
            "streetNumber": "101",
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
              "key": "carlos-garcia",
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
              "key": "sofia-lopez",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "lifttech-solutions-ltd-es",
        "name": "LiftTech Soluciones S.L.",
        "parentUnit": {
          "key": "lifttech-solutions-ltd",
          "typeId": "business-unit",
        },
        "shippingAddresses": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "spain",
            "typeId": "store",
          },
        ],
        "unitType": "Division",
      }
    `);
  });
});
