import type { TAssociateDraft } from '../../../types';
import williamDavis from './william-davis';

describe(`with williamDavis preset`, () => {
  it(`should return a williamDavis preset`, () => {
    const williamDavisPreset = williamDavis().build<TAssociateDraft>();
    expect(williamDavisPreset).toMatchInlineSnapshot(`
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
          "key": "william-davis",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a williamDavis preset when built for graphql`, () => {
    const williamDavisPresetGraphql =
      williamDavis().buildGraphql<TAssociateDraft>();
    expect(williamDavisPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "william-davis",
          "typeId": "customer",
        },
      }
    `);
  });
});
