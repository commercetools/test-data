import type { TCompanyDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUs from './eagle-heavy-lift-technologies-inc-us';

describe(`with eagleHeavyLiftTechnologiesIncUs preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUs preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsPreset =
      eagleHeavyLiftTechnologiesIncUs().build<TCompanyDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "789",
            "building": "A",
            "city": "New York",
            "company": "Eagle Heavy Lift Technologies Inc. NY",
            "country": "US",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "eagle-heavy-lift-technologies-inc-us-ny-1",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "10001",
            "region": "New York",
            "salutation": undefined,
            "state": "New York",
            "streetName": "Broadway",
            "streetNumber": "123",
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
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "james-smith",
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
              "key": "emma-johnson",
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
              "key": "michael-williams",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "eagle-heavy-lift-technologies-inc-us",
        "name": "Eagle Heavy Lift Technologies Inc.",
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "us-large-customers",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUs preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsPresetGraphql =
      eagleHeavyLiftTechnologiesIncUs().buildGraphql<TCompanyDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": "789",
            "building": "A",
            "city": "New York",
            "company": "Eagle Heavy Lift Technologies Inc. NY",
            "country": "US",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "eagle-heavy-lift-technologies-inc-us-ny-1",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "10001",
            "region": "New York",
            "salutation": undefined,
            "state": "New York",
            "streetName": "Broadway",
            "streetNumber": "123",
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
                "inheritance": "Disabled",
              },
            ],
            "customer": {
              "key": "james-smith",
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
              "key": "emma-johnson",
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
              "key": "michael-williams",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": undefined,
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "eagle-heavy-lift-technologies-inc-us",
        "name": "Eagle Heavy Lift Technologies Inc.",
        "shippingAddresses": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "us-large-customers",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });
});
