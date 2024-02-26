import type { TAssociateDraft } from '../../../types';
import camilleLefevre from './camille-lefevre';

describe(`with camilleLefevre preset`, () => {
  it(`should return a camilleLefevre preset`, () => {
    const camilleLefevrePreset = camilleLefevre().build<TAssociateDraft>();
    expect(camilleLefevrePreset).toMatchInlineSnapshot(`
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
          "key": "camille-lefevre",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a camilleLefevre preset when built for graphql`, () => {
    const camilleLefevrePresetGraphql =
      camilleLefevre().buildGraphql<TAssociateDraft>();
    expect(camilleLefevrePresetGraphql).toMatchInlineSnapshot(`
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
          "key": "camille-lefevre",
          "typeId": "customer",
        },
      }
    `);
  });
});
