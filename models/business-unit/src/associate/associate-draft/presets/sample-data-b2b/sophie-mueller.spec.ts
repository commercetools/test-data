import type { TAssociateDraft } from '../../../types';
import sophieMueller from './sophie-mueller';

describe(`with sophieMueller preset`, () => {
  it(`should return a sophieMueller preset`, () => {
    const sophieMuellerPreset = sophieMueller().build<TAssociateDraft>();
    expect(sophieMuellerPreset).toMatchInlineSnapshot(`
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
          "key": "sophie-mueller",
          "typeId": "customer",
        },
      }
    `);
  });

  it(`should return a sophieMueller preset when built for graphql`, () => {
    const sophieMuellerPresetGraphql =
      sophieMueller().buildGraphql<TAssociateDraft>();
    expect(sophieMuellerPresetGraphql).toMatchInlineSnapshot(`
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
          "key": "sophie-mueller",
          "typeId": "customer",
        },
      }
    `);
  });
});
