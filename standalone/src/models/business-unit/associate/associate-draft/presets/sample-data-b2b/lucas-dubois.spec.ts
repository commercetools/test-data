import type { TAssociateDraft } from '../../../types';
import lucasDubois from './lucas-dubois';

describe(`with lucasDubois preset`, () => {
  it(`should return a lucasDubois preset`, () => {
    const lucasDuboisPreset = lucasDubois().build<TAssociateDraft>();
    expect(lucasDuboisPreset).toMatchInlineSnapshot(`
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
          "key": "lucas-dubois",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a lucasDubois preset when built for graphql`, () => {
    const lucasDuboisPresetGraphql =
      lucasDubois().buildGraphql<TAssociateDraft>();
    expect(lucasDuboisPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "lucas-dubois",
          "typeId": "customer",
        },
      }
    `);
  });
});
