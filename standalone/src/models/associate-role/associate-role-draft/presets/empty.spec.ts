import { TAssociateRoleDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TAssociateRoleDraft>();
  expect(emptyDraft).toMatchObject({
    name: undefined,
    buyerAssignable: undefined,
    permissions: undefined,
    custom: undefined,
  });
});
