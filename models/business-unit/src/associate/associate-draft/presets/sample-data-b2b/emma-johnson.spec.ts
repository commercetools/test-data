import type { TAssociateDraft } from '../../../types';
import emmaJohnson from './emma-johnson';

describe(`with emmaJohnson preset`, () => {
  it(`should return a emmaJohnson preset`, () => {
    const emmaJohnsonPreset = emmaJohnson().build<TAssociateDraft>();
    expect(emmaJohnsonPreset).toMatchInlineSnapshot(`
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
          "key": "emma-johnson",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a emmaJohnson preset when built for graphql`, () => {
    const emmaJohnsonPresetGraphql =
      emmaJohnson().buildGraphql<TAssociateDraft>();
    expect(emmaJohnsonPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "emma-johnson",
          "typeId": "customer",
        },
      }
    `);
  });
});
