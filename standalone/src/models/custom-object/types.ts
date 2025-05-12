import type {
  CustomObject,
  CustomObjectDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';

//CustomObjectDraft
export type TCustomObjectDraft = CustomObjectDraft;
export type TCustomObjectDraftBuilder = TBuilder<TCustomObjectDraft>;
export type TCreateCustomObjectDraftBuilder = () => TCustomObjectDraftBuilder;
export type TCustomObjectDraftGraphql = TCustomObjectDraft;

//CustomObject
export type TCustomObject = CustomObject;
export type TCustomObjectBuilder = TBuilder<TCustomObject>;
export type TCreateCustomObjectBuilder = () => TCustomObjectBuilder;
export type TCustomObjectGraphql = TCustomObject & {
  __typename: 'CustomObject';
};
