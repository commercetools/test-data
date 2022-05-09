import type { TAddress } from '../types';
import AddressDraft from './draft';

it('should set all locales to undefined', () => {
  const addressDraft = AddressDraft().build<TAddress>();
  expect(addressDraft).toEqual(
    expect.objectContaining({
      id: undefined,
    })
  );
});
