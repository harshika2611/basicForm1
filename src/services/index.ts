import { log } from 'console';
import data from '../config/config';
import { RowDataPacket } from 'mysql2';
interface User {
  name: string;
  Email: string;
  Contact: number;
}
interface IUser extends RowDataPacket {
  name: string;
  email: string;
  contact: string;
}
const allUserServices = async (user: User) => {
  try {
    const sql0 = `select email from registration where email=?`;
    const [result] = await data.execute<IUser[]>(sql0, [user.Email]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const allInsertService = async (user: User) => {
  try {
    const { name, Email, Contact } = user;
    const sql1 = `insert into registration(\`name\`,email,contact) 
        values
        (?,?,?);`;
    const [ans] = await data.execute(sql1, [name, Email, Contact]);
  } catch (error) {
    console.log(error);
  }
};

export { allUserServices, allInsertService, User };
