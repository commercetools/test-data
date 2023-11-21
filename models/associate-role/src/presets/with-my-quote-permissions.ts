import AssociateRole from '../builder';
import { QUOTE_PERMISSIONS } from '../constants';

const withMyQuotePermissions = () =>
  AssociateRole().permissions([
    QUOTE_PERMISSIONS.VIEW_MY_QUOTES,
    QUOTE_PERMISSIONS.ACCEPT_MY_QUOTES,
    QUOTE_PERMISSIONS.DECLINE_MY_QUOTES,
    QUOTE_PERMISSIONS.RENEGOTIATE_MY_QUOTES,
  ]);

export default withMyQuotePermissions;
