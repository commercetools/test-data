import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const associateRoleReference = (): TReferenceBuilder =>
  Reference().typeId('associate-role');

export default associateRoleReference;
