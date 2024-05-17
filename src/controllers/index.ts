import { Request, Response } from 'express';
import data from '../config/config';
import { allUserServices, User, allInsertService } from '../services';

const getUser = async (req: Request, res: Response) => {
  res.render('index');
};

const allUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    const { name, Email, Contact } = req.body;
    const result = await allUserServices(user);
    if (result?.length) {
      return res.status(409).send('already exist  ');
    } else {
      try {
        const result2 = await allInsertService(user);
        return res.status(200).send('success');
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something Went Wrong..' });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something Went Wrong..' });
  }
};

export { getUser, allUser };
