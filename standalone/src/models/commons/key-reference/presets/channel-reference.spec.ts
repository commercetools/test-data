import type { TKeyReference } from '../types';
import channelReference from './channel-reference';

it('should build channel reference', () => {
  const built = channelReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'channel',
  });
});
