import type { TAddressDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsNy1 from './eagle-heavy-lift-technologies-inc-us-ny-1';

describe(`with eagleHeavyLiftTechnologiesIncUsNy1 preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsNy1 preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsNy1Preset =
      eagleHeavyLiftTechnologiesIncUsNy1().build<TAddressDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsNy1Preset).toMatchInlineSnapshot(`
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
      }
    `);
  });

  it(`should return a eagleHeavyLiftTechnologiesIncUsNy1 preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsNy1PresetGraphql =
      eagleHeavyLiftTechnologiesIncUsNy1().buildGraphql<TAddressDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsNy1PresetGraphql)
      .toMatchInlineSnapshot(`
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
      }
    `);
  });
});
