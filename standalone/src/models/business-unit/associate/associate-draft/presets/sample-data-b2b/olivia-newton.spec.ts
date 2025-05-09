import type { TAssociateDraft } from '../../../types';
import oliviaNewton from './olivia-newton';

describe(`with oliviaNewton preset`, () => {
  it(`should return a oliviaNewton preset`, () => {
    const oliviaNewtonPreset = oliviaNewton().build<TAssociateDraft>();
    expect(oliviaNewtonPreset).toMatchInlineSnapshot(`
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
          "key": "olivia-newton",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a oliviaNewton preset when built for graphql`, () => {
    const oliviaNewtonPresetGraphql =
      oliviaNewton().buildGraphql<TAssociateDraft>();
    expect(oliviaNewtonPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "olivia-newton",
          "typeId": "customer",
        },
      }
    `);
  });
});
