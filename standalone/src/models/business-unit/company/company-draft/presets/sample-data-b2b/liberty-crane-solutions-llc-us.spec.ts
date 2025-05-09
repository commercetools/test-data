import type { TCompanyDraft } from '../../../types';
import libertyCraneSolutionsLlcUs from './liberty-crane-solutions-llc-us';

describe(`with libertyCraneSolutionsLlcUs preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUs preset`, () => {
    const libertyCraneSolutionsLlcUsPreset =
      libertyCraneSolutionsLlcUs().build<TCompanyDraft>();
    expect(libertyCraneSolutionsLlcUsPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Building B",
            "apartment": "456",
            "building": "C",
            "city": "Raleigh",
            "company": "Liberty Crane Solutions LLC NC",
            "country": "US",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "liberty-crane-solutions-llc-us-nc-1",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "27601",
            "region": "North Carolina",
            "salutation": undefined,
            "state": "North Carolina",
            "streetName": "Main Street",
            "streetNumber": "789",
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
              "key": "olivia-newton",
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
              "key": "william-davis",
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
              "key": "ava-brown",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info@lcs.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "liberty-crane-solutions-llc-us",
        "name": "Liberty Crane Solutions LLC",
        "shippingAddresses": undefined,
        "status": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "us-medium-customers",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUs preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsPresetGraphql =
      libertyCraneSolutionsLlcUs().buildGraphql<TCompanyDraft>();
    expect(libertyCraneSolutionsLlcUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": "Building B",
            "apartment": "456",
            "building": "C",
            "city": "Raleigh",
            "company": "Liberty Crane Solutions LLC NC",
            "country": "US",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": undefined,
            "id": undefined,
            "key": "liberty-crane-solutions-llc-us-nc-1",
            "lastName": undefined,
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "27601",
            "region": "North Carolina",
            "salutation": undefined,
            "state": "North Carolina",
            "streetName": "Main Street",
            "streetNumber": "789",
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
              "key": "olivia-newton",
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
              "key": "william-davis",
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
              "key": "ava-brown",
              "typeId": "customer",
            },
          },
        ],
        "billingAddresses": undefined,
        "contactEmail": "info@lcs.com",
        "custom": undefined,
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "key": "liberty-crane-solutions-llc-us",
        "name": "Liberty Crane Solutions LLC",
        "shippingAddresses": undefined,
        "storeMode": "Explicit",
        "stores": [
          {
            "key": "us-medium-customers",
            "typeId": "store",
          },
        ],
        "unitType": "Company",
      }
    `);
  });
});
