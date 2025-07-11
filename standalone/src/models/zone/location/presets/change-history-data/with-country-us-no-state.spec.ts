import type { TLocationGraphql, TLocationRest } from '../../types';
import * as presets from './with-country-us-no-state';

describe('Location with country code of `US` & no state', () => {
  it('should return a REST Location containing a `US` country code & no state', () => {
    const restModel = presets.restPreset().build<TLocationRest>();

    expect(restModel).toEqual(
      expect.objectContaining({
        country: 'US',
        state: null,
      })
    );
  });

  it('should return a GraphQL Location containing a `US` country code & no state', () => {
    const graphqlModel = presets.graphqlPreset().build<TLocationGraphql>();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        country: 'US',
        state: null,
        __typename: 'Location',
      })
    );
  });

  it('should return a Compat Location containing a `US` country code & no state', () => {
    const compatModel = presets.compatPreset().build();

    expect(compatModel).toEqual(
      expect.objectContaining({
        country: 'US',
        state: null,
      })
    );
  });
});
