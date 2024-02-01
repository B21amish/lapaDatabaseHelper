import config from "./utils/config";
import { Filters, RowData, Rows } from "./types/Routes";

// lapa database url
const lapaDatabaseUrl = `${config.lapaDatabaseProtocol}://${config.lapaDatabaseIp}:${config.lapaDatabasePort}/`;

// function to insert data in database
const insertRows = async (
  data: Rows,
  databaseName: String,
  schemaName: String,
  tableName: String
) => {
  try {
    // lapa insert data url
    let insertRowsUrl = lapaDatabaseUrl + "insert_rows";
    let body = {
      data: data,
      database_name: databaseName,
      schema_name: schemaName,
      table_name: tableName,
    };

    // Initiate the fetch request
    let response = await fetch(insertRowsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 201) {
      let result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to insert data, error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};

// function to get rows in database
const getRows = async (
  filters: Filters,
  databaseName: String,
  schemaName: String,
  tableName: String,
  ignoreFiltersAndGetAll: boolean = false
) => {
  try {
    // lapa get rows url
    let getRowsUrl = lapaDatabaseUrl + "get_rows";
    let body = {
      filters: filters,
      database_name: databaseName,
      schema_name: schemaName,
      table_name: tableName,
      ignore_filters_and_get_all: ignoreFiltersAndGetAll,
    };

    // Initiate the fetch request
    let response = await fetch(getRowsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      let result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to get rows, error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};

// function to edit rows in database
const editRows = async (
  data: RowData,
  filters: Filters,
  databaseName: String,
  schemaName: String,
  tableName: String,
  ignoreFiltersAndEditAll: boolean = false
) => {
  try {
    // lapa edit row url
    let editRowsUrl = lapaDatabaseUrl + "edit_rows";
    let body = {
      database_name: databaseName,
      table_name: tableName,
      schema_name: schemaName,
      filters: filters,
      data: data,
      ignore_filters_and_edit_all: ignoreFiltersAndEditAll,
    };

    // Initiate the fetch request
    let response = await fetch(editRowsUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      let result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to edit rows, error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};

// function to delete rows in database
const deleteRows = async (
  filters: Filters,
  databaseName: String,
  schemaName: String,
  tableName: String,
  ignoreFiltersAndDeleteAll: boolean = false
) => {
  try {
    // lapa delete rows url
    let deleteRowsUrl = lapaDatabaseUrl + "delete_rows";
    let body = {
      filters: filters,
      database_name: databaseName,
      schema_name: schemaName,
      table_name: tableName,
      ignore_filters_and_delete_all: ignoreFiltersAndDeleteAll,
    };

    // Initiate the fetch request
    let response = await fetch(deleteRowsUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      let result = await response.json();
      return result;
    } else {
      throw new Error(`Failed to delete rows, error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export { insertRows, getRows, editRows, deleteRows };
