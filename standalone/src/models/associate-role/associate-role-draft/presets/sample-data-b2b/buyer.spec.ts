import type { TAssociateRoleDraft } from '../../../types';
import buyer from './buyer';

describe(`with buyer preset`, () => {
  it(`should return a buyer preset`, () => {
    const buyerPreset = buyer().build<TAssociateRoleDraft>();
    expect(buyerPreset).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "buyer",
        "name": "Buyer",
        "permissions": [
          "CreateMyCarts",
          "DeleteMyCarts",
          "UpdateMyCarts",
          "ViewMyCarts",
          "CreateMyOrdersFromMyCarts",
          "CreateMyOrdersFromMyQuotes",
          "UpdateMyOrders",
          "ViewMyOrders",
          "AcceptMyQuotes",
          "DeclineMyQuotes",
          "ReassignMyQuotes",
          "RenegotiateMyQuotes",
          "ViewMyQuotes",
          "CreateMyQuoteRequestsFromMyCarts",
          "UpdateMyQuoteRequests",
          "ViewMyQuoteRequests",
        ],
      }
    `);
  });

  it(`should return a buyer preset when built for graphql`, () => {
    const buyerPresetGraphql = buyer().buildGraphql<TAssociateRoleDraft>();
    expect(buyerPresetGraphql).toMatchInlineSnapshot(`
      {
        "buyerAssignable": true,
        "custom": undefined,
        "key": "buyer",
        "name": "Buyer",
        "permissions": [
          "CreateMyCarts",
          "DeleteMyCarts",
          "UpdateMyCarts",
          "ViewMyCarts",
          "CreateMyOrdersFromMyCarts",
          "CreateMyOrdersFromMyQuotes",
          "UpdateMyOrders",
          "ViewMyOrders",
          "AcceptMyQuotes",
          "DeclineMyQuotes",
          "ReassignMyQuotes",
          "RenegotiateMyQuotes",
          "ViewMyQuotes",
          "CreateMyQuoteRequestsFromMyCarts",
          "UpdateMyQuoteRequests",
          "ViewMyQuoteRequests",
        ],
      }
    `);
  });
});
