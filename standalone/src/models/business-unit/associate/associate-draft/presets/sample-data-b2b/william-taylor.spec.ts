import type { TAssociateDraft } from '../../../types';
import williamTaylor from './william-taylor';

describe(`with williamTaylor preset`, () => {
  it(`should return a williamTaylor preset`, () => {
    const williamTaylorPreset = williamTaylor().build<TAssociateDraft>();
    expect(williamTaylorPreset).toMatchInlineSnapshot(`
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
          "key": "william-taylor",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a williamTaylor preset when built for graphql`, () => {
    const williamTaylorPresetGraphql =
      williamTaylor().buildGraphql<TAssociateDraft>();
    expect(williamTaylorPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "william-taylor",
          "typeId": "customer",
        },
      }
    `);
  });
});
