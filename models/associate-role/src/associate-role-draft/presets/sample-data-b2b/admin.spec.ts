import type { TAssociateRoleDraft } from '../../../types';
import admin from './admin';

describe(`with admin preset`, () => {
  it(`should return a admin preset`, () => {
    const adminPreset = admin().build<TAssociateRoleDraft>();
    expect(adminPreset).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "admin",
        "name": "Admin",
        "permissions": [
          "UpdateAssociates",
          "UpdateApprovalFlows",
          "ViewOthersCarts",
          "DeclineOthersQuotes",
          "CreateApprovalRules",
          "UpdateBusinessUnitDetails",
          "ViewOthersOrders",
          "AddChildUnits",
          "UpdateOthersOrders",
          "UpdateOthersCarts",
          "AcceptOthersQuotes",
          "ViewOthersQuotes",
          "UpdateParentUnit",
          "UpdateOthersQuoteRequests",
          "ViewOthersQuoteRequests",
          "UpdateApprovalRules",
        ],
      }
    `);
  });

  it(`should return a admin preset when built for graphql`, () => {
    const adminPresetGraphql = admin().buildGraphql<TAssociateRoleDraft>();
    expect(adminPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "AssociateRole",
        "buyerAssignable": true,
        "custom": undefined,
        "key": "admin",
        "name": "Admin",
        "permissions": [
          "UpdateAssociates",
          "UpdateApprovalFlows",
          "ViewOthersCarts",
          "DeclineOthersQuotes",
          "CreateApprovalRules",
          "UpdateBusinessUnitDetails",
          "ViewOthersOrders",
          "AddChildUnits",
          "UpdateOthersOrders",
          "UpdateOthersCarts",
          "AcceptOthersQuotes",
          "ViewOthersQuotes",
          "UpdateParentUnit",
          "UpdateOthersQuoteRequests",
          "ViewOthersQuoteRequests",
          "UpdateApprovalRules",
        ],
      }
    `);
  });
});
