import AssociateRole from '../builder';
import { QUOTE_PERMISSIONS } from '../constants';

const withAllQuotePermissions = () =>
  AssociateRole().permissions([
    QUOTE_PERMISSIONS.VIEW_MY_QUOTES,
    QUOTE_PERMISSIONS.VIEW_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.ACCEPT_MY_QUOTES,
    QUOTE_PERMISSIONS.ACCEPT_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_MY_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_OTHERS_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_MY_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_OTHERS_QUOTES,
  ]);

export default withAllQuotePermissions;