import Organization from "../models/Organization";

async function getNoOfOrg() {
    try {
      const orgCount = await Organization.countDocuments();
      return orgCount;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Define a route to get the count of total users
  export const getOrg = async (req:any, res:any) => {
    try {
      const orgCount = await getNoOfOrg();
      res.json({ count: orgCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }