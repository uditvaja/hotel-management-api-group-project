import { Waitlist } from "../models/waitlistmodel.js";

export const getwaitlists = async (req, res) => {
     try {
          const waitlist = await Waitlist.find({});
          res.json({ message: "Get WaitLists Successfully", data: waitlist })
     } catch (err) {
          res.status(500).json({ message: 'Server Error' });
     }

}
export const postwaitlist = async (req, res) => {
     try {
          let {name, phone, partysize, joinTime, estimatedWaitTime, notified} = req.body;

          const data = new Waitlist({
               name, phone, partysize, joinTime, estimatedWaitTime, notified
          })

          await data.save();
          res.json({ message: "post WaitList Successfully" })

     } catch (error) {
          console.log(error);
          return res.status(500).json({ error: 'Server Error' })
     }
}
export const getwaitlist = async (req, res) => {
     try {
          const waitlist = await Waitlist.findById({ _id : req.params.id})
          if (!waitlist) {
               return response.status(404).json({ error: 'waitlist not found' })
          }
          res.json({ message: "Get WaitList Successfully", data: waitlist })
     } catch (error) {
          return res.status(500).json({ error: 'server error' })
     }
}
export const putwaitlist = async (req, res) => {
     try {
          await Waitlist.findByIdAndUpdate(req.params.id, req.body)

          res.json({ message: "update WaitList Successfully" })

     } catch (error) {
          return res.status(500).json({ error: 'server error' })
     }
}
export const deletewaitlist = async (req, res) => {
     try {

          await Waitlist.findByIdAndDelete(req.params.id)

          res.json({ message: "Delete WaitList Successfully" })


     } catch (error) {
          return res.status(500).json({ error: 'server error' })
     }
}
