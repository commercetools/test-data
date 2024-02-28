import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdEsAddress from './lifttech-solutions-ltd-es-address';

describe(`with lifttechSolutionsLtdEsAddress preset`, () => {
  it(`should return a lifttechSolutionsLtdEsAddress preset`, () => {
    const lifttechSolutionsLtdEsAddressPreset =
      lifttechSolutionsLtdEsAddress().build<TAddressDraft>();
    expect(lifttechSolutionsLtdEsAddressPreset).toMatchInlineSnapshot(`
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
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsAddress preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsAddressPresetGraphql =
      lifttechSolutionsLtdEsAddress().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdEsAddressPresetGraphql).toMatchInlineSnapshot(`
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
      }
    `);
  });
});
