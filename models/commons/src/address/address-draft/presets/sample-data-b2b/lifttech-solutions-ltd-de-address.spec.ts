import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdDeAddress from './lifttech-solutions-ltd-de-address';

describe(`with lifttechSolutionsLtdDeAddress preset`, () => {
  it(`should return a lifttechSolutionsLtdDeAddress preset`, () => {
    const lifttechSolutionsLtdDeAddressPreset =
      lifttechSolutionsLtdDeAddress().build<TAddressDraft>();
    expect(lifttechSolutionsLtdDeAddressPreset).toMatchInlineSnapshot(`
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
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeAddress preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeAddressPresetGraphql =
      lifttechSolutionsLtdDeAddress().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdDeAddressPresetGraphql).toMatchInlineSnapshot(`
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
      }
    `);
  });
});
