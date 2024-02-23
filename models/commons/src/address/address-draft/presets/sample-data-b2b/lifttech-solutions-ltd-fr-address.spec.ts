import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdFrAddress from './lifttech-solutions-ltd-fr-address';

describe(`with lifttechSolutionsLtdFrAddress preset`, () => {
  it(`should return a lifttechSolutionsLtdFrAddress preset`, () => {
    const lifttechSolutionsLtdFrAddressPreset =
      lifttechSolutionsLtdFrAddress().build<TAddressDraft>();
    expect(lifttechSolutionsLtdFrAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
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
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrAddress preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrAddressPresetGraphql =
      lifttechSolutionsLtdFrAddress().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdFrAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
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
      }
    `);
  });
});
