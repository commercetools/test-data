import type { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryUsa from './country-usa';

describe('with the preset `country usa`', () => {
  it('should return a zone with name `USA`', () => {
    const zone = countryUsa().build<TZoneDraft>();

    expect(zone).toEqual(
      expect.objectContaining({
        name: expect.stringContaining('USA'),
        key: expect.stringContaining('usa'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'US',
          }),
        ]),
      })
    );
  });

  it('should return a zone with name `USA` when built for GraphQL', () => {
    const zone = countryUsa().buildGraphql<TZoneDraftGraphql>();

    expect(zone).toEqual(
      expect.objectContaining({
        __typename: expect.stringContaining('ZoneDraft'),
        name: expect.stringContaining('USA'),
        key: expect.stringContaining('usa'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'US',
          }),
        ]),
      })
    );
  });
});
