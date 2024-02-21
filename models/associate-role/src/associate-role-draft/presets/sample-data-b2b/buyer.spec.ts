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
          "UpdateMyCarts",
          "RenegotiateMyQuotes",
          "CreateMyOrdersFromMyCarts",
          "UpdateMyOrders",
          "ViewMyQuotes",
          "CreateMyOrdersFromMyQuotes",
          "UpdateOthersCarts",
          "CreateMyCarts",
          "ViewMyOrders",
          "CreateMyQuoteRequestsFromMyCarts",
          "AcceptMyQuotes",
          "ViewMyCarts",
          "ViewMyQuoteRequests",
          "UpdateMyQuoteRequests",
          "DeclineMyQuotes",
          "DeleteMyCarts",
        ],
      }
    `);
  });

  it(`should return a buyer preset when built for graphql`, () => {
    const buyerPresetGraphql = buyer().buildGraphql<TAssociateRoleDraft>();
    expect(buyerPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "AssociateRole",
        "buyerAssignable": true,
        "custom": undefined,
        "key": "buyer",
        "name": "Buyer",
        "permissions": [
          "UpdateMyCarts",
          "RenegotiateMyQuotes",
          "CreateMyOrdersFromMyCarts",
          "UpdateMyOrders",
          "ViewMyQuotes",
          "CreateMyOrdersFromMyQuotes",
          "UpdateOthersCarts",
          "CreateMyCarts",
          "ViewMyOrders",
          "CreateMyQuoteRequestsFromMyCarts",
          "AcceptMyQuotes",
          "ViewMyCarts",
          "ViewMyQuoteRequests",
          "UpdateMyQuoteRequests",
          "DeclineMyQuotes",
          "DeleteMyCarts",
        ],
      }
    `);
  });
});
