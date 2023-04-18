import { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import jamieDoe from './jamie-doe';

describe('with the preset `jamieDoe`', () => {
  it('should return a customer draft with name `Jamie Doe`', () => {
    const customer = jamieDoe().build<TCustomerDraft>();

    expect(customer.key).toMatchInlineSnapshot(`"12345"`);
    expect(customer.email).toMatchInlineSnapshot(`"jamie.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"Jamie"`);

    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"vip"');
    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });

  it('should return a customer draft with name `Jamie Doe` when built for GraphQL', () => {
    const customer = jamieDoe().buildGraphql<TCustomerDraftGraphql>();

    expect(customer.key).toMatchInlineSnapshot(`"12345"`);
    expect(customer.email).toMatchInlineSnapshot(`"jamie.doe@example.com"`);
    expect(customer.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(customer.lastName).toMatchInlineSnapshot(`"Doe"`);

    expect(customer.addresses![0].firstName).toMatchInlineSnapshot(`"Jamie"`);

    expect(customer.customerGroup!.key).toMatchInlineSnapshot('"vip"');
    expect(customer.isEmailVerified).toMatchInlineSnapshot(`false`);
  });
});
