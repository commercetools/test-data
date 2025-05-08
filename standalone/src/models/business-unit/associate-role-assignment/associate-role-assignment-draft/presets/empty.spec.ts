import { TAssociateRoleAssignmentDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyChannelDraft = empty().build<TAssociateRoleAssignmentDraft>();
  expect(emptyChannelDraft).toMatchObject({
    associateRole: expect.any(Object),
    inheritance: undefined,
  });
});
