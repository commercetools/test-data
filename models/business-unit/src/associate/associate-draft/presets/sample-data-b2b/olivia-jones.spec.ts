import type { TAssociateDraft } from '../../../types';
import oliviaJones from './olivia-jones';

describe(`with oliviaJones preset`, () => {
  it(`should return a oliviaJones preset`, () => {
    const oliviaJonesPreset = oliviaJones().build<TAssociateDraft>();
    expect(oliviaJonesPreset).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "admin",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "olivia-jones",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a oliviaJones preset when built for graphql`, () => {
    const oliviaJonesPresetGraphql =
      oliviaJones().buildGraphql<TAssociateDraft>();
    expect(oliviaJonesPresetGraphql).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "admin",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "olivia-jones",
          "typeId": "customer",
        },
      }
    `);
  });
});
