import type { TZoneDraft } from '../../../types';
import northAmerica from './north-america';

describe(`with northAmerica preset`, () => {
  it(`should return a northAmerica preset`, () => {
    const northAmericaPreset = northAmerica().build<TZoneDraft>();
    expect(northAmericaPreset).toMatchInlineSnapshot(`
      {
        "key": "north-america",
        "locations": [
          {
            "country": "US",
          },
        ],
        "name": "North America",
        "description": "Shipping zone for North America",
      }
    `);
  });

  it(`should return a northAmerica preset when built for graphql`, () => {
    const northAmericaPresetGraphql = northAmerica().buildGraphql<TZoneDraft>();
    expect(northAmericaPresetGraphql).toMatchInlineSnapshot(`
      {        
        "key": "north-america",
        "locations": [
          {
            "country": "US",
          },
        ],
        "name": "North America",      
        "description": "Shipping zone for North America",  
      }
    `);
  });
});
