import type {
  Field,
  Json,
  TTransformer,
  TTransformsObject,
  TBuilder,
} from './types';

import {
  isObject,
  buildField,
  buildFields,
  isDefaultTransform,
} from './helpers';

function Transformer<Model extends Json, NewModel extends Json = Model>(
  transforms: TTransformsObject<Model, NewModel>
): TTransformer<Model, NewModel> {
  return {
    hasTransform(name) {
      return Boolean(transforms[name]);
    },
    transform({ name, fields }) {
      let transformedFields = { ...fields };
      const fieldsAdder = transforms[name]?.addFields;
      const fieldsReplacer = transforms[name]?.replaceFields;
      const fieldsToRemove = transforms[name]?.removeFields;
      const fieldsToBuild = transforms[name]?.buildFields;

      const addOrReplaceField = (fieldName: string, fieldValue: Field) => {
        transformedFields = {
          ...transformedFields,
          [fieldName]: fieldValue,
        };
      };

      if (fieldsToBuild) {
        fieldsToBuild.forEach((fieldToBuild) => {
          const field = transformedFields[fieldToBuild] as TBuilder<Model>;
          // Build only fields that are not null or undefined
          if (field) {
            transformedFields = {
              ...transformedFields,
              [fieldToBuild]: Array.isArray(field)
                ? buildFields<Model>(field, name, { fieldToBuild })
                : buildField<Model>(field, name, { fieldToBuild }),
            };
          }
        });
      }

      // The default transformer only allows building nested fields to not
      // allow re-transforming model shape
      if (isDefaultTransform(name))
        return (transformedFields as unknown) as NewModel;

      if (fieldsAdder) {
        const fieldsToAdd = fieldsAdder({ fields });

        Object.entries(fieldsToAdd).forEach(([fieldName, fieldValue]) => {
          if (transformedFields[fieldName]) return;

          addOrReplaceField(fieldName, fieldValue);
        });
      }

      if (fieldsReplacer) {
        const fieldsToReplace = fieldsReplacer({ fields });

        if (isObject(fieldsToReplace))
          Object.entries(fieldsToReplace).forEach(([fieldName, fieldValue]) => {
            if (!transformedFields[fieldName]) return;

            addOrReplaceField(fieldName, fieldValue);
          });
        else {
          transformedFields = fieldsToReplace;
        }
      }

      if (fieldsToRemove) {
        fieldsToRemove.forEach((fieldToRemove) => {
          delete transformedFields[fieldToRemove];
        });
      }

      return (transformedFields as unknown) as NewModel;
    },
  };
}

export default Transformer;
