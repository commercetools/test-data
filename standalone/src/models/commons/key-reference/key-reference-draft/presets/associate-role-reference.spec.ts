import type { TKeyReferenceDraft } from '../../types';
import associateRoleReference from './associate-role-reference';

it('should build an associateRole reference', () => {
  const built = associateRoleReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'associate-role',
  });
});
