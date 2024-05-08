import { VoucherModel } from "../models/voucher.model.js";

export const getVouchers = async (req, res) => {
    try {
        await VoucherModel.find({}).then((data) => {
            res.json({ message: "Voucher Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getVoucher = async (req, res) => {
    try {
        let { id } = req.params
        await VoucherModel.find({ _id: id }).then((data) => {
            res.json({ message: "Voucher Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postVoucher = async (req, res) => {
    try {
        let {title,amount,description} = req.body
        let data = new VoucherModel({
            title,amount,description
        })
        await data.save();
        res.json({ message: "Voucher Successfully" })
    } catch (error) {
        console.log("postVoucher ",error);
        res.status(500).json({ error: "Server Error" });
    }
}
export const putVoucher = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await VoucherModel.findByIdAndUpdate(id, data);
        res.json({ message: "Voucher Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteVoucher = async (req, res) => {
    try {
        let { id } = req.params
        await VoucherModel.findByIdAndDelete(id);
        res.json({ message: "Voucher Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}