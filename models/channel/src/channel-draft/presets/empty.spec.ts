import type { TChannelDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyChannelDraft = empty().build<TChannelDraft>();
  expect(emptyChannelDraft).toMatchObject({
    roles: undefined,
    name: undefined,
    address: undefined,
    custom: undefined,
    geoLocation: undefined,
  });
});
