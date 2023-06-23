import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const quoteRequestReference = (): TReferenceBuilder =>
  Reference().typeId('quote-request');

export default quoteRequestReference;
