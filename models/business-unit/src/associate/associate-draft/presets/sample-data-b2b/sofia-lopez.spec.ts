import type { TAssociateDraft } from '../../../types';
import sofiaLopez from './sofia-lopez';

describe(`with sofiaLopez preset`, () => {
  it(`should return a sofiaLopez preset`, () => {
    const sofiaLopezPreset = sofiaLopez().build<TAssociateDraft>();
    expect(sofiaLopezPreset).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "buyer",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "sofia-lopez",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a sofiaLopez preset when built for graphql`, () => {
    const sofiaLopezPresetGraphql =
      sofiaLopez().buildGraphql<TAssociateDraft>();
    expect(sofiaLopezPresetGraphql).toMatchInlineSnapshot(`
      {
        "associateRoleAssignments": [
          {
            "associateRole": {
              "key": "buyer",
              "typeId": "associate-role",
            },
            "inheritance": "Disabled",
          },
        ],
        "customer": {
          "key": "sofia-lopez",
          "typeId": "customer",
        },
      }
    `);
  });
});
