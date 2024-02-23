import { TCompanyDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TCompanyDraft>();
  expect(emptyDraft).toMatchObject({
    status: undefined,
    stores: undefined,
    storeMode: undefined,
    contactEmail: undefined,
    associateMode: undefined,
    associates: undefined,
    addresses: undefined,
    shippingAddresses: undefined,
    defaultShippingAddress: undefined,
    billingAddresses: undefined,
    defaultBillingAddress: undefined,
    custom: undefined,
  });
});
