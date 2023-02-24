import {
  TCustomerGroupDraft,
  TCustomerGroupDraftGraphql,
} from '../../../types';
import employee from './employee';

describe('with the preset `employee`', () => {
  it('should return a customer group draft with name `Employee`', () => {
    const customerGroup = employee().build<TCustomerGroupDraft>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"employee"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"Employee"`);
  });

  it('should return a customer group draft with name `Employee` when built for GraphQL', () => {
    const customerGroup = employee().buildGraphql<TCustomerGroupDraftGraphql>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"employee"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"Employee"`);
  });
});
