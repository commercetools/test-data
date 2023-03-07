import { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import marySmith from './mary-smith';

describe('with the preset `marySmith`', () => {
  it('should return a customer draft with name `Mary`', () => {
    const customer = marySmith().build<TCustomerDraft>();

    expect(customer.key).toMatchInlineSnapshot(`"123456"`);
    expect(customer.email).toMatchInlineSnapshot(`"mary.smith@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Smith"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(customer.addresses![0].lastName).toMatchInlineSnapshot(`"Smith"`);
    expect(customer.addresses![0].streetName).toMatchInlineSnapshot(
      `"Sample Street"`
    );
    expect(customer.addresses![0].streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(customer.addresses![0].postalCode).toMatchInlineSnapshot(`"12345"`);
    expect(customer.addresses![0].city).toMatchInlineSnapshot(`"Sample Town"`);
    expect(customer.addresses![0].country).toMatchInlineSnapshot(`"DE"`);

    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });

  it('should return a customer draft with name `Mary` when built for GraphQL', () => {
    const customer = marySmith().buildGraphql<TCustomerDraftGraphql>();

    expect(customer.key).toMatchInlineSnapshot(`"123456"`);
    expect(customer.email).toMatchInlineSnapshot(`"mary.smith@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Smith"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(customer.addresses![0].lastName).toMatchInlineSnapshot(`"Smith"`);
    expect(customer.addresses![0].streetName).toMatchInlineSnapshot(
      `"Sample Street"`
    );
    expect(customer.addresses![0].streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(customer.addresses![0].postalCode).toMatchInlineSnapshot(`"12345"`);
    expect(customer.addresses![0].city).toMatchInlineSnapshot(`"Sample Town"`);
    expect(customer.addresses![0].country).toMatchInlineSnapshot(`"DE"`);

    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });
});
