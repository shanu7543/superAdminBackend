import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/userModal";

const secretKey = "your-secret-key"; // Replace with your secret key
const expiresIn = "1h"; // Token expiration time


class UserController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      // Find the user by email
      const user: IUser | null = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }


      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn });

      res.status(200).json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

// export const getNoOfUser = async()=>{
//   try {
//     const UserList =  await User.find().count()
//     return UserList;

//   } catch (error) {
//     console.log(error)
//   }
// }


// Create a function to get the count of total users
async function getNoOfUser() {
  try {
    const userCount = await User.countDocuments();
    return userCount;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Define a route to get the count of total users
export const getUser = async (req:any, res:any) => {
  try {
    const userCount = await getNoOfUser();
    res.json({ count: userCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

export default UserController;
