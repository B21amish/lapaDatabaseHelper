// ==========================
// uncomment for testing
// ==========================
// import { insertRows, getRows, editRows, deleteRows } from "./routes";

// // Example: Insert Rows
// let insertData = [{ game_name: "example" }];
// insertRows(insertData, "game", "public", "game")
//   .then((insertDataOutput) => {
//     console.log(insertDataOutput);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// //Example: Get Rows
// let getRowsfilters = {};
// getRows(getRowsfilters, "game", "public", "game")
//   .then((getRowsOutput) => {
//     console.log(getRowsOutput);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Example: Edit Rows
// let editData = { game_name: "edited" };
// let editFilters = { game_name: "example" };
// editRows(editData, editFilters, "game", "public", "game")
//   .then((editRowsOutput) => {
//     console.log(editRowsOutput);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Example: Delete Rows
// let deleteFilters = { game_name: "edited" };
// deleteRows(deleteFilters, "game", "public", "game")
//   .then((deleteRowsOutput) => {
//     console.log(deleteRowsOutput);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export * from "./src/routes";
