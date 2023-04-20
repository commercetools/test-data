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

    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });

  it('should return a customer draft with name `Mary` when built for GraphQL', () => {
    const customer = marySmith().buildGraphql<TCustomerDraftGraphql>();

    expect(customer.key).toMatchInlineSnapshot(`"123456"`);
    expect(customer.email).toMatchInlineSnapshot(`"mary.smith@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Smith"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"Mary"`);

    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });
});
