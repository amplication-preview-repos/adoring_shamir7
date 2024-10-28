import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHEMICALGROUP_TITLE_FIELD } from "../chemicalGroup/ChemicalGroupTitle";

export const MetaboliteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Metabolites"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="chemicalGroup"
          source="chemicalgroup.id"
          reference="ChemicalGroup"
        >
          <TextField source={CHEMICALGROUP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
