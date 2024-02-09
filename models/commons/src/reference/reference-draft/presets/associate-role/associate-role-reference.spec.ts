import type { TReferenceDraft } from '../../../types';
import associateRoleReference from './associate-role-reference';

it('should build an associate-role reference', () => {
  const built =
    associateRoleReference().build<TReferenceDraft<'associate-role'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'associate-role',
  });
});
