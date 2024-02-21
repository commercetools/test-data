import type { TAssociateDraft } from '../../../types';
import lukasSchmidt from './lukas-schmidt';

describe(`with lukasSchmidt preset`, () => {
  it(`should return a lukasSchmidt preset`, () => {
    const lukasSchmidtPreset = lukasSchmidt().build<TAssociateDraft>();
    expect(lukasSchmidtPreset).toMatchInlineSnapshot(`
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
          "key": "lukas-schmidt",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a lukasSchmidt preset when built for graphql`, () => {
    const lukasSchmidtPresetGraphql =
      lukasSchmidt().buildGraphql<TAssociateDraft>();
    expect(lukasSchmidtPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "lukas-schmidt",
          "typeId": "customer",
        },
      }
    `);
  });
});
