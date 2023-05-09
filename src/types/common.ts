export type errorsType = string[];

export interface errorsObjectType {
  [key: string]: string[];
  non_field_errors: string[];
}

export type enumType = {
  [key: string]: string[];
};

export type objectType = {
  [key: string]: any;
};

export type uploadPictureColumnType = {
  column: uploadPictureColumnDataType;
};

export type uploadPictureColumnDataType = {
  isEditable: boolean;
};

export type validationItemSchemaType = {
  type: string;
  attr: {
    [key: string]: any;
  };
};

export type validationSchemaType = {
  [key: string]: validationItemSchemaType;
};

export type tableFormDataType = {
  value: number;
  columnName: string;
  rowData: any;
};

export type showPreviewPictureType = {
  operation: string;
  pictureId?: number;
};

export type negotiationDataType = {
  chain: any | null;
};
