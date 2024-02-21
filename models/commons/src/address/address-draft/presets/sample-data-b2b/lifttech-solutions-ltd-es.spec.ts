import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdEs from './lifttech-solutions-ltd-es';

describe(`with lifttechSolutionsLtdEs preset`, () => {
  it(`should return a lifttechSolutionsLtdEs preset`, () => {
    const lifttechSolutionsLtdEsPreset =
      lifttechSolutionsLtdEs().build<TAddressDraft>();
    expect(lifttechSolutionsLtdEsPreset).toMatchInlineSnapshot(`
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
        "state": "Community of Madrid",
        "streetName": "Calle Mayor",
        "streetNumber": "101",
        "title": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEs preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsPresetGraphql =
      lifttechSolutionsLtdEs().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdEsPresetGraphql).toMatchInlineSnapshot(`
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
        "state": "Community of Madrid",
        "streetName": "Calle Mayor",
        "streetNumber": "101",
        "title": undefined,
      }
    `);
  });
});
