
import { MenuTimeModel } from "../models/menutime.model.js";

export const getMenuTimes = async (req, res) => {
    try {
        const data = await MenuTimeModel.find({}).populate('menu_id');
        res.json({ message: "Get all Menu Time", data });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const postMenuTime = async (req, res) => {
    try {
        const { time, menu_id } = req.body;

        const serve = new MenuTimeModel({
            time,
            menu_id
        });

        await serve.save();
        res.json({ message: 'Menu Time added successfully...' });

    } catch (error) {
        console.log("err", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getMenuTime = async (req, res) => {
    try {
        let { id } = req.params;
        // console.log(id);
        let data = await MenuTimeModel.findById({ _id: id }).populate('menu_id');
        res.json({ message: `${id} Menu Time Find successfully.. `, data });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const putMenuTime = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedata = req.body;

        await MenuTimeModel.findByIdAndUpdate(id, updatedata);
        res.json({ message: `${id} Menu Time is updated..` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteMenuTime = async (req, res) => {
    try {
        let { id } = req.params;
        await MenuTimeModel.findByIdAndDelete(id);
        res.json({ message: `${id} has been deleted..` })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
