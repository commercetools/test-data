import type { TAssociateRoleDraftBuilder } from '../../../types';
import * as AssociateRoleDraft from '../../index';

const buyer = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft.presets
    .empty()
    .key('buyer')
    .name('Buyer')
    .buyerAssignable(true)
    .permissions([
      'CreateMyCarts',
      'DeleteMyCarts',
      'UpdateMyCarts',
      'ViewMyCarts',
      'CreateMyOrdersFromMyCarts',
      'CreateMyOrdersFromMyQuotes',
      'UpdateMyOrders',
      'ViewMyOrders',
      'AcceptMyQuotes',
      'DeclineMyQuotes',
      'ReassignMyQuotes',
      'RenegotiateMyQuotes',
      'ViewMyQuotes',
      'CreateMyQuoteRequestsFromMyCarts',
      'UpdateMyQuoteRequests',
      'ViewMyQuoteRequests',
    ]);

export default buyer;
