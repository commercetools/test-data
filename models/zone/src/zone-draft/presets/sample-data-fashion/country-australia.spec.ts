import { TZoneDraft, TZoneDraftGraphql } from '../../../types';
import countryAustralia from './country-australia';

describe('with the preset `country australia`', () => {
  it('should return a zone with name `Australia`', () => {
    const zone = countryAustralia().build<TZoneDraft>();

    expect(zone).toEqual(
      expect.objectContaining({
        name: expect.stringContaining('Australia'),
        key: expect.stringContaining('australia'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'AU',
          }),
        ]),
      })
    );
  });

  it('should return a zone with name `Australia` when built for GraphQL', () => {
    const zoneGraphql = countryAustralia().buildGraphql<TZoneDraftGraphql>();

    expect(zoneGraphql).toEqual(
      expect.objectContaining({
        __typename: expect.stringContaining('ZoneDraft'),
        name: expect.stringContaining('Australia'),
        key: expect.stringContaining('australia'),
        locations: expect.arrayContaining([
          expect.objectContaining({
            country: 'AU',
          }),
        ]),
      })
    );
  });
});
