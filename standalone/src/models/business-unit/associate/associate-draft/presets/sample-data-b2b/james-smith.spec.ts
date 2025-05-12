import type { TAssociateDraft } from '../../../types';
import jamesSmith from './james-smith';

describe(`with jamesSmith preset`, () => {
  it(`should return a jamesSmith preset`, () => {
    const jamesSmithPreset = jamesSmith().build<TAssociateDraft>();
    expect(jamesSmithPreset).toMatchInlineSnapshot(`
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
          "key": "james-smith",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a jamesSmith preset when built for graphql`, () => {
    const jamesSmithPresetGraphql =
      jamesSmith().buildGraphql<TAssociateDraft>();
    expect(jamesSmithPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "james-smith",
          "typeId": "customer",
        },
      }
    `);
  });
});
