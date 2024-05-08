import { Category } from "../models/categories.js";

export const getcategorys = async (req, res) => {
     try {
          const category = await Category.find();
          res.json({ message: "Get Category Successfully", data: category })
     } catch (err) {
          console.log(err);
          res.status(500).json({ message: 'Server Error' });
     }

}
export const postcategory = async (req, res) => {
     try {
          let { name, description } = req.body;

          const newcategory = new Category({
               name, description
          })
          await newcategory.save();
          res.json({ message: "Create Category Successfully" })
     } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Server Error' });
     }
}
export const getcategory = async (req, res) => {
     try {
          const category = await Category.findById({_id : req.params.id})
          res.json({ message: "Get Category Successfully", data: category })
     } catch (error) {
          res.status(500).json({ message: 'Server Error' });
     }
}
export const putcategory = async (req, res) => {
     try {
          await Category.findByIdAndUpdate(req.params.id, req.body)

          res.json({ message: "Update Category Successfully" })

     } catch (error) {
          res.status(500).json({ message: 'Server Error' });
     }
}
export const deletecategory = async (req, res) => {
     try {
          
          await Category.findByIdAndDelete(req.params.id)

          res.json({ message: "Delete Category Successfully"})

     } catch (error) {
          res.status(500).json({ message: 'Server Error' });
     }
}
