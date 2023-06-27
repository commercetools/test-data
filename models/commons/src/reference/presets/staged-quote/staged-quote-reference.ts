import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const stagedQuoteReference = (): TReferenceBuilder =>
  Reference().typeId('staged-quote');

export default stagedQuoteReference;
