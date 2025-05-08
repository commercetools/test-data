import type { TAssociateDraft } from '../../../types';
import avaBrown from './ava-brown';

describe(`with avaBrown preset`, () => {
  it(`should return a avaBrown preset`, () => {
    const avaBrownPreset = avaBrown().build<TAssociateDraft>();
    expect(avaBrownPreset).toMatchInlineSnapshot(`
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
          "key": "ava-brown",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a avaBrown preset when built for graphql`, () => {
    const avaBrownPresetGraphql = avaBrown().buildGraphql<TAssociateDraft>();
    expect(avaBrownPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "ava-brown",
          "typeId": "customer",
        },
      }
    `);
  });
});
