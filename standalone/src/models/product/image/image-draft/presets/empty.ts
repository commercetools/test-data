import { TImageDraftBuilder } from '../../types';
import ImageDraft from '../builder';

const empty = (): TImageDraftBuilder => ImageDraft().label(undefined);

export default empty;
