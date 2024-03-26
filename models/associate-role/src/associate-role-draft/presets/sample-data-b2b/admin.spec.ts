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
          "UpdateApprovalFlows",
          "CreateApprovalRules",
          "UpdateApprovalRules",
          "AddChildUnits",
          "UpdateAssociates",
          "UpdateBusinessUnitDetails",
          "UpdateParentUnit",
          "UpdateOthersCarts",
          "ViewOthersCarts",
          "UpdateOthersOrders",
          "ViewOthersOrders",
          "AcceptOthersQuotes",
          "DeclineOthersQuotes",
          "ViewOthersQuotes",
          "UpdateOthersQuoteRequests",
          "ViewOthersQuoteRequests",
        ],
      }
    `);
  });

  it(`should return a admin preset when built for graphql`, () => {
    const adminPresetGraphql = admin().buildGraphql<TAssociateRoleDraft>();
    expect(adminPresetGraphql).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "admin",
        "name": "Admin",
        "permissions": [
          "UpdateApprovalFlows",
          "CreateApprovalRules",
          "UpdateApprovalRules",
          "AddChildUnits",
          "UpdateAssociates",
          "UpdateBusinessUnitDetails",
          "UpdateParentUnit",
          "UpdateOthersCarts",
          "ViewOthersCarts",
          "UpdateOthersOrders",
          "ViewOthersOrders",
          "AcceptOthersQuotes",
          "DeclineOthersQuotes",
          "ViewOthersQuotes",
          "UpdateOthersQuoteRequests",
          "ViewOthersQuoteRequests",
        ],
      }
    `);
  });
});
