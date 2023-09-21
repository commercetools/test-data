import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
// import samSmithAddresses from './sam-smith-addresses';
import {
  samSmithAddress1,
  samSmithAddress2,
  samSmithAddress3,
  samSmithAddress4,
} from './sam-smith-addresses';

describe('with the presets for samSmithAddresses', () => {
  it('should return a rest representation of samSmithAddress1', () => {
    const address = samSmithAddress1().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "sdfdsf",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Saumya",
        "id": undefined,
        "key": "sam-smith-address-1",
        "lastName": "Goel",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "24453",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "dfdfds",
        "streetNumber": undefined,
        "title": undefined,
      }
    `);
  });

  it('should return a address draft for samSmithAddress2', () => {
    const address = samSmithAddress2().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": "dsfdsf",
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "cvdsfa",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "sfsdf",
        "id": undefined,
        "key": "sam-smith-address-2",
        "lastName": "sfsdf",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "23243",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "sfsdf",
        "streetNumber": undefined,
        "title": undefined,
      }
    `);
  });

  it('should return a address draft for samSmithAddress3', () => {
    const address = samSmithAddress3().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "dfgsfg",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "gfadg",
        "id": undefined,
        "key": "sam-smith-address-3",
        "lastName": "fdgsfgd",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "fdgsg",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "4dfgfes",
        "streetNumber": undefined,
        "title": undefined,
      }
    `);
  });
  it('should return a address draft for samSmithAddress3', () => {
    const address = samSmithAddress4().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "dfafdsf",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "dsfdsgf",
        "id": undefined,
        "key": "sam-smith-address-4",
        "lastName": "sdfdsf",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "43424",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "sdfsdfsdf",
        "streetNumber": undefined,
        "title": undefined,
      }
    `);
  });
});
