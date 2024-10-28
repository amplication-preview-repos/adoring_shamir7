import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MetaboliteTitle } from "../metabolite/MetaboliteTitle";

export const ChemicalGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="metabolites" reference="Metabolite">
          <SelectArrayInput
            optionText={MetaboliteTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
