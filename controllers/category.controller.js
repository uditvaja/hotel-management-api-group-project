import { category } from "../models/cetegories.js";

export const getcategorys = async (req, res) => {
    try {
        const category = await category.find();
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }

}
export const postcategory = async (req, res) => { 
    try{
        if (!req.body.name) {

             return res.status(422).json({error: 'name feild is requried'})
        }

        if (!req.body.description) {

             return res.status(422).json({error: 'description feild is requried'})
        }

       const newcategory = await category.create(req.body)
       return res.status(201).json(newcategory)
   } catch(error) {
        return res.status(500).json({error: error.message}) 
   }
}
export const getcategory = async (req, res) => { 
    try{
        if(!mongoose.isValidObjectId(req.params.id)){
             return res.status(422).json({error: 'parameter is not valid id'})
        }
        const category = await category.findById(req.params.id)
        if(!category){
             return response.status(404).json({error: 'category not found'})
        }
        return res.status(200).json(category)   
   }catch (error){
        return res.status(500).json({error: error.message})  
   }
}
export const putcategory = async (req, res) => {
    try{
        if (!mongoose.isValidObjectId(req.params.id)){
             return res.status(422).json({error: 'parameter is not valid id'})
        }

        if (!await category.exists({_id: req.params.id})){
             return res.status(422).json({error: 'category not found'})
        }
    const Categoryupdated = await category.findByIdAndUpdate(req.params.id, req.body, {new: true})

    return res.status(200).json(Categoryupdated)

   }catch(error) {
        return res.status(500).json({error: error.message})
   }
}
export const deletecategory = async (req, res) => {
    try{
        if(!mongoose .isValidObjectId(req.params.id)){
           return res.status(422).json({error: 'parameter is not valid id'})
        }
        await category.findByIdAndDelete(req.params.id)

        return res.status(204).send()


   }catch(error){
        return res.status(500).json({error: 'error.message'})
   }
}
