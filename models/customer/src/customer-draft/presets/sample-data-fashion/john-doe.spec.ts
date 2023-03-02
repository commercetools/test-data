import { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import johnDoe from './john-doe';

describe('with the preset `johnDoe`', () => {
  it('should return a customer draft with name `John Doe`', () => {
    const customer = johnDoe().build<TCustomerDraft>();

    expect(customer.key).toMatchInlineSnapshot(`"12345"`);
    expect(customer.email).toMatchInlineSnapshot(`"jamie.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);
    //   expect(customer.addresses).toMatchInlineSnapshot(`
    //     [{
    //       "firstName": "Jamie",
    //       "lastName": "Doe",
    //       "streetName": "Main Street",
    //       "streetNumber": "1",
    //       "postalCode": "56789",
    //       "city": "Mainville",
    //       "state": "New Jersey",
    //       "country": "US",
    //     }]
    //   `);
    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"vip"');
  });

  it('should return a customer draft with name `John Doe` when built for GraphQL', () => {
    const customer = johnDoe().buildGraphql<TCustomerDraftGraphql>();

    expect(customer.key).toMatchInlineSnapshot(`"12345"`);
    expect(customer.email).toMatchInlineSnapshot(`"jamie.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);
    //   expect(customer.addresses).toMatchInlineSnapshot(`
    //     [{
    //       "firstName": "Jamie",
    //       "lastName": "Doe",
    //       "streetName": "Main Street",
    //       "streetNumber": "1",
    //       "postalCode": "56789",
    //       "city": "Mainville",
    //       "state": "New Jersey",
    //       "country": "US",
    //     }]
    //   `);
    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"vip"');
  });
});
