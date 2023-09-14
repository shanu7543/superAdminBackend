import VidyChat from "../models/VidyChat";

async function getVidychats() {
    try {
      const vidychatCount = await VidyChat.countDocuments();
      return vidychatCount;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Define a route to get the count of total users
  export const getVidychat = async (req:any, res:any) => {
    try {
      const vidychatCount = await getVidychats();
      res.json({ count: vidychatCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }