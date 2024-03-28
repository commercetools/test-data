import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdAddress from './lifttech-solutions-ltd-address';

describe(`with lifttechSolutionsLtdAddress preset`, () => {
  it(`should return a lifttechSolutionsLtdAddress preset`, () => {
    const lifttechSolutionsLtdAddressPreset =
      lifttechSolutionsLtdAddress().build<TAddressDraft>();
    expect(lifttechSolutionsLtdAddressPreset).toMatchInlineSnapshot(`
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
        "state": undefined,
        "streetName": "Baker Street",
        "streetNumber": "221B",
        "title": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdAddress preset when built for graphql`, () => {
    const lifttechSolutionsLtdAddressPresetGraphql =
      lifttechSolutionsLtdAddress().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdAddressPresetGraphql).toMatchInlineSnapshot(`
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
        "state": undefined,
        "streetName": "Baker Street",
        "streetNumber": "221B",
        "title": undefined,
      }
    `);
  });
});
