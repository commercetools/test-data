import { TStandalonePriceGraphql } from './types';
import { StandalonePrice } from '.';

describe('builder', () => {
  it('should sync ids between customerGroup and customerGroupRef and between channel and channelRef in a GraphQL build', () => {
    const standalonePrice =
      StandalonePrice.random().buildGraphql<TStandalonePriceGraphql>();
    expect(standalonePrice.customerGroup?.id).toBe(
      standalonePrice.customerGroupRef?.id
    );
    expect(standalonePrice.channel?.id).toBe(standalonePrice.channelRef?.id);
  });
});
