import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdFr from './lifttech-solutions-ltd-fr';

describe(`with lifttechSolutionsLtdFr preset`, () => {
  it(`should return a lifttechSolutionsLtdFr preset`, () => {
    const lifttechSolutionsLtdFrPreset =
      lifttechSolutionsLtdFr().build<TAddressDraft>();
    expect(lifttechSolutionsLtdFrPreset).toMatchInlineSnapshot(`
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

  it(`should return a lifttechSolutionsLtdFr preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrPresetGraphql =
      lifttechSolutionsLtdFr().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdFrPresetGraphql).toMatchInlineSnapshot(`
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
