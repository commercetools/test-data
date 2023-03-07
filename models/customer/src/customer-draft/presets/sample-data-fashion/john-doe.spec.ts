import { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import johnDoe from './john-doe';

describe('with the preset `johnDoe`', () => {
  it('should return a customer draft with name `John Doe`', () => {
    const customer = johnDoe().build<TCustomerDraft>();

    expect(customer.key).toMatchInlineSnapshot(`"1234"`);
    expect(customer.email).toMatchInlineSnapshot(`"john.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"John"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"John"`);
    expect(customer.addresses![0].lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(customer.addresses![0].streetName).toMatchInlineSnapshot(
      `"Center Road"`
    );
    expect(customer.addresses![0].streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(customer.addresses![0].postalCode).toMatchInlineSnapshot(`"34567"`);
    expect(customer.addresses![0].city).toMatchInlineSnapshot(`"Center Town"`);
    expect(customer.addresses![0].country).toMatchInlineSnapshot(`"DE"`);

    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"employee"');
    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });

  it('should return a customer draft with name `John Doe` when built for GraphQL', () => {
    const customer = johnDoe().buildGraphql<TCustomerDraftGraphql>();

    expect(customer.key).toMatchInlineSnapshot(`"1234"`);
    expect(customer.email).toMatchInlineSnapshot(`"john.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"John"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"John"`);
    expect(customer.addresses![0].lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(customer.addresses![0].streetName).toMatchInlineSnapshot(
      `"Center Road"`
    );
    expect(customer.addresses![0].streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(customer.addresses![0].postalCode).toMatchInlineSnapshot(`"34567"`);
    expect(customer.addresses![0].city).toMatchInlineSnapshot(`"Center Town"`);
    expect(customer.addresses![0].country).toMatchInlineSnapshot(`"DE"`);

    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"employee"');
    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });
});
