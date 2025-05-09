import type { TAssociateDraft } from '../../../types';
import carlosGarcia from './carlos-garcia';

describe(`with carlosGarcia preset`, () => {
  it(`should return a carlosGarcia preset`, () => {
    const carlosGarciaPreset = carlosGarcia().build<TAssociateDraft>();
    expect(carlosGarciaPreset).toMatchInlineSnapshot(`
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
          "key": "carlos-garcia",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a carlosGarcia preset when built for graphql`, () => {
    const carlosGarciaPresetGraphql =
      carlosGarcia().buildGraphql<TAssociateDraft>();
    expect(carlosGarciaPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "carlos-garcia",
          "typeId": "customer",
        },
      }
    `);
  });
});
