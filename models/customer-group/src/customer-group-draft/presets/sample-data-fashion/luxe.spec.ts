import {
  TCustomerGroupDraft,
  TCustomerGroupDraftGraphql,
} from '../../../types';
import luxe from './luxe';

describe('with the preset `luxe`', () => {
  it('should return a customer group draft with name `Luxe`', () => {
    const customerGroup = luxe().build<TCustomerGroupDraft>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"luxe"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"Luxe"`);
  });

  it('should return a customer group draft with name `Luxe` when built for GraphQL', () => {
    const customerGroup = luxe().buildGraphql<TCustomerGroupDraftGraphql>();

    expect(customerGroup.key).toMatchInlineSnapshot(`"luxe"`);
    expect(customerGroup.groupName).toMatchInlineSnapshot(`"Luxe"`);
  });
});
