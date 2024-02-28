import type { TAssociateRoleDraft } from '../../../types';
import approver from './approver';

describe(`with approver preset`, () => {
  it(`should return a approver preset`, () => {
    const approverPreset = approver().build<TAssociateRoleDraft>();
    expect(approverPreset).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "approver",
        "name": "Approver",
        "permissions": [
          "UpdateApprovalFlows",
          "ViewOthersCarts",
          "CreateApprovalRules",
          "ViewOthersOrders",
          "UpdateOthersCarts",
          "UpdateApprovalRules",
        ],
      }
    `);
  });

  it(`should return a approver preset when built for graphql`, () => {
    const approverPresetGraphql =
      approver().buildGraphql<TAssociateRoleDraft>();
    expect(approverPresetGraphql).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "approver",
        "name": "Approver",
        "permissions": [
          "UpdateApprovalFlows",
          "ViewOthersCarts",
          "CreateApprovalRules",
          "ViewOthersOrders",
          "UpdateOthersCarts",
          "UpdateApprovalRules",
        ],
      }
    `);
  });
});
