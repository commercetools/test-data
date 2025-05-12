import type { TAssociateDraft } from '../../../types';
import ameliaJones from './amelia-jones';

describe(`with ameliaJones preset`, () => {
  it(`should return a ameliaJones preset`, () => {
    const ameliaJonesPreset = ameliaJones().build<TAssociateDraft>();
    expect(ameliaJonesPreset).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "approver",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "amelia-jones",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a ameliaJones preset when built for graphql`, () => {
    const ameliaJonesPresetGraphql =
      ameliaJones().buildGraphql<TAssociateDraft>();
    expect(ameliaJonesPresetGraphql).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "approver",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "amelia-jones",
          "typeId": "customer",
        },
      }
    `);
  });
});
