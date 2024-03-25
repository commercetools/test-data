import type { TZoneDraft } from '../../../types';
import europe from './europe';

describe(`with europe preset`, () => {
  it(`should return a europe preset`, () => {
    const europePreset = europe().build<TZoneDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {        
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "ES",
          },
          {
            "country": "FR",
          },
          {
            "country": "GB",
          },
        ],
        "name": "Europe",
        "description": "Shipping zone for Europe",
      }
    `);
  });

  it(`should return a europe preset when built for graphql`, () => {
    const europePresetGraphql = europe().buildGraphql<TZoneDraft>();
    expect(europePresetGraphql).toMatchInlineSnapshot(`
      {
        "key": "europe",
        "locations": [
          {
            "country": "DE",
          },
          {
            "country": "ES",
          },
          {
            "country": "FR",
          },
          {
            "country": "GB",
          },
        ],
        "name": "Europe",
        "description": "Shipping zone for Europe",
      }
    `);
  });
});
