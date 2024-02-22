import type { TZoneDraft } from '../../../types';
import europe from './europe';

describe(`with europe preset`, () => {
  it(`should return a europe preset`, () => {
    const europePreset = europe().build<TZoneDraft>();
    expect(europePreset).toMatchInlineSnapshot(`
      {
        "description": undefined,
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
      }
    `);
  });

  it(`should return a europe preset when built for graphql`, () => {
    const europePresetGraphql = europe().buildGraphql<TZoneDraft>();
    expect(europePresetGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
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
      }
    `);
  });
});
