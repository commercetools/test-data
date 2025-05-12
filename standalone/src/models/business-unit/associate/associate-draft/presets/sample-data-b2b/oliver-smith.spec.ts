import type { TAssociateDraft } from '../../../types';
import oliverSmith from './oliver-smith';

describe(`with oliverSmith preset`, () => {
  it(`should return a oliverSmith preset`, () => {
    const oliverSmithPreset = oliverSmith().build<TAssociateDraft>();
    expect(oliverSmithPreset).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "admin",
              "typeId": "associate-role",
            },
            "inheritance": "Enabled",
          },
        ],
        "customer": {
          "key": "oliver-smith",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a oliverSmith preset when built for graphql`, () => {
    const oliverSmithPresetGraphql =
      oliverSmith().buildGraphql<TAssociateDraft>();
    expect(oliverSmithPresetGraphql).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "admin",
              "typeId": "associate-role",
            },
            "inheritance": "Enabled",
          },
        ],
        "customer": {
          "key": "oliver-smith",
          "typeId": "customer",
        },
      }
    `);
  });
});
