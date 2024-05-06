import { waitlist } from "../models/waitlistmodel.js";

export const getwaitlists = async (req, res) => {
    try {
        const waitlist = await Waitlist.find();
        res.json(waitlist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }

}
export const postwaitlist = async (req, res) => { 
    try{
        if (!req.body.name) {

             return res.status(422).json({error: 'name feild is requried'})
        }

        if (!req.body.phone) {

             return res.status(422).json({error: 'phone feild is requried'})
        }

       const newwaitlist = await waitlist.create(req.body)
       return res.status(201).json(newwaitlist)
   } catch(error) {
        return res.status(500).json({error: error.message}) 
   }
}
export const getwaitlist = async (req, res) => { 
    try{
        if(!mongoose.isValidObjectId(req.params.id)){
             return res.status(422).json({error: 'parameter is not valid id'})
        }
        const waitlist = await waitlist.findById(req.params.id)
        if(!waitlist){
             return response.status(404).json({error: 'waitlist not found'})
        }
        return res.status(200).json(waitlist)   
   }catch (error){
        return res.status(500).json({error: error.message})  
   }
}
export const putwaitlist = async (req, res) => {
    try{
        if (!mongoose.isValidObjectId(req.params.id)){
             return res.status(422).json({error: 'parameter is not valid id'})
        }

        if (!await waitlist.exists({_id: req.params.id})){
             return res.status(422).json({error: 'waitlist not found'})
        }
    const waitlistupdated = await waitlist.findByIdAndUpdate(req.params.id, req.body, {new: true})

    return res.status(200).json(waitlistupdated)

   }catch(error) {
        return res.status(500).json({error: error.message})
   }
}
export const deletewaitlist = async (req, res) => {
    try{
        if(!mongoose .isValidObjectId(req.params.id)){
           return res.status(422).json({error: 'parameter is not valid id'})
        }
        await waitlist.findByIdAndDelete(req.params.id)

        return res.status(204).send()


   }catch(error){
        return res.status(500).json({error: 'error.message'})
   }
}
