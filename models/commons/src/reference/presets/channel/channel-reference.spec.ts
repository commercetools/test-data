import type { TReference } from '../../types';
import channelReference from './channel-reference';

it('should build a channel reference', () => {
  const built = channelReference().build<TReference<'channel'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'channel',
  });
});
