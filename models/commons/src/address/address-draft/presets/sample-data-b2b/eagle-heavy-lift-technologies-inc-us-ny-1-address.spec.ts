import type { TAddressDraft } from '../../../types';
import eagleHeavyLiftTechnologiesIncUsNy1Address from './eagle-heavy-lift-technologies-inc-us-ny-1-address';

describe(`with eagleHeavyLiftTechnologiesIncUsNy1Address preset`, () => {
  it(`should return a eagleHeavyLiftTechnologiesIncUsNy1Address preset`, () => {
    const eagleHeavyLiftTechnologiesIncUsNy1AddressPreset =
      eagleHeavyLiftTechnologiesIncUsNy1Address().build<TAddressDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsNy1AddressPreset)
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

  it(`should return a eagleHeavyLiftTechnologiesIncUsNy1Address preset when built for graphql`, () => {
    const eagleHeavyLiftTechnologiesIncUsNy1AddressPresetGraphql =
      eagleHeavyLiftTechnologiesIncUsNy1Address().buildGraphql<TAddressDraft>();
    expect(eagleHeavyLiftTechnologiesIncUsNy1AddressPresetGraphql)
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
