import type { TAssociateRoleDraftBuilder } from '../../../types';
import * as AssociateRoleDraft from '../../index';

const buyer = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft.presets
    .empty()
    .key('buyer')
    .name('Buyer')
    .buyerAssignable(true)
    .permissions([
      'UpdateMyCarts',
      'RenegotiateMyQuotes',
      'CreateMyOrdersFromMyCarts',
      'UpdateMyOrders',
      'ViewMyQuotes',
      'CreateMyOrdersFromMyQuotes',
      'UpdateOthersCarts',
      'CreateMyCarts',
      'ViewMyOrders',
      'CreateMyQuoteRequestsFromMyCarts',
      'AcceptMyQuotes',
      'ViewMyCarts',
      'ViewMyQuoteRequests',
      'UpdateMyQuoteRequests',
      'DeclineMyQuotes',
      'DeleteMyCarts',
    ]);

export default buyer;
