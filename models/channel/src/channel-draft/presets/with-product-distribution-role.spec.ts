import { roles } from '../../constants';
import { TChannelDraft } from '../../types';
import withProductDistributionRole from './with-product-distribution-role';

describe('with product distribution role', () => {
  it('should have ProductDistribution only role', () => {
    const channel = withProductDistributionRole().build<TChannelDraft>();

    expect(channel).toEqual(
      expect.objectContaining({
        roles: expect.arrayContaining([roles.ProductDistribution]),
      })
    );
  });
});
