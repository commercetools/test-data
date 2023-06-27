import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const extensionReference = (): TReferenceBuilder =>
  Reference().typeId('extension');

export default extensionReference;
