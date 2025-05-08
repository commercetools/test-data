import type { TAssociateRoleDraftBuilder } from '../../types';
import AssociateRoleDraft from '../builder';

const empty = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft()
    .name(undefined)
    .buyerAssignable(undefined)
    .permissions(undefined)
    .custom(undefined);

export default empty;
