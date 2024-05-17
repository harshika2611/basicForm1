import mysql from 'mysql2/promise';
const data = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@2611',
  database: 'advance-form1',
  dateStrings: true,
  multipleStatements: true,
});
// data.getConnection((err: string) => {
//   if (!err) {
//     console.log('connected..');
//   } else {
//     console.log('Error In Database Connection: ' + err);
//   }
// });
export default data;
