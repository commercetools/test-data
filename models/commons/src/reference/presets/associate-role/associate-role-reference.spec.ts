import type { TReference } from '../../types';
import associateRoleReference from './associate-role-reference';

it('should build an associate-role reference', () => {
  const built = associateRoleReference().build<TReference<'associate-role'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'associate-role',
  });
});
