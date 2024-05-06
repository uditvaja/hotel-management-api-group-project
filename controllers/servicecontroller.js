
import { servicemodel } from "../models/servicemodel.js";

export const getservice=async (req, res) => {
    try {
        const serves = await servicemodel.find({});
        res.json({ msg: "All services", data: serves });
    } catch (error) {
        console.log(error);
    }
};


export const postservice =async (req, res) => {
    try {
        const { time, menu_id } = req.body;


        const menuIds = Array.isArray(menu_id) ? menu_id : [menu_id];

        const serve = new servicemodel({
            time,
            menu_id: menuIds
        });

        await serve.save();
        res.json('service added successfully...');

    } catch (error) {
        console.log("err", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const singleget= async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let serve = await servicemodel.findById({ _id: id });
    res.json({ msg: `${id} service Find successfully.. `, data: serve });
};

export const updateservice =async (req, res) => {
    let { id } = req.params;
    let updatedata = req.body;

    let updatesdata = await servicemodel.findByIdAndUpdate(id, updatedata);
    res.json({ msg: `${id} service is updated..`, data: updatesdata });

};

export const deleteservice=async (req, res) => {
    try {
        let { id } = req.params;
        const deleteservice = await servicemodel.findByIdAndDelete(id);
        res.json({ msg: `${id} has been deleted..`, data: deleteservice })
    } catch (error) {

    }
};
