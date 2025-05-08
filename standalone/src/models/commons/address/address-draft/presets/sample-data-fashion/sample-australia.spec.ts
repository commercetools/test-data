import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import sampleAustralia from './sample-australia';

describe('with the preset `sampleAustralia`', () => {
  it('should return a address draft', () => {
    const address = sampleAustralia().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Center Town",
        "company": undefined,
        "country": "AU",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "Australia",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "34567",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Road",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = sampleAustralia().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Center Town",
        "company": undefined,
        "country": "AU",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "Australia",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "34567",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Road",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
