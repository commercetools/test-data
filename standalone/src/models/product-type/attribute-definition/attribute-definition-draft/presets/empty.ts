import type { TAttributeDefinitionDraftBuilder } from '../../types';
import AttributeDefinition from '../builder';

const empty = (): TAttributeDefinitionDraftBuilder =>
  AttributeDefinition()
    .attributeConstraint(undefined)
    .inputHint(undefined)
    .isSearchable(undefined)
    .inputTip(undefined);

export default empty;
