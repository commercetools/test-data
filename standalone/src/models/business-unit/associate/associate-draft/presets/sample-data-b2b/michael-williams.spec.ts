import type { TAssociateDraft } from '../../../types';
import michaelWilliams from './michael-williams';

describe(`with michaelWilliams preset`, () => {
  it(`should return a michaelWilliams preset`, () => {
    const michaelWilliamsPreset = michaelWilliams().build<TAssociateDraft>();
    expect(michaelWilliamsPreset).toMatchInlineSnapshot(`
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
          "key": "michael-williams",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a michaelWilliams preset when built for graphql`, () => {
    const michaelWilliamsPresetGraphql =
      michaelWilliams().buildGraphql<TAssociateDraft>();
    expect(michaelWilliamsPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "michael-williams",
          "typeId": "customer",
        },
      }
    `);
  });
});
