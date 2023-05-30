import { TAddressDraft } from '../../../types';
import usAddress from './us-address';

describe('with country code usa', () => {
  it('should return a country code set to `usa`', () => {
    const address = usAddress().build<TAddressDraft>();

    expect(address).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
      })
    );
  });
});
