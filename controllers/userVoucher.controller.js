import { UserVoucherModel } from "../models/userVoucher.model.js";


export const getUserVouchers = async (req, res) => {
    try {
        await UserVoucherModel.find({}).then((data) => {
            res.json({ message: "UserVoucher Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getUserVoucher = async (req, res) => {
    try {
        let { id } = req.params
        await UserVoucherModel.find({ _id: id }).then((data) => {
            res.json({ message: "UserVoucher Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postUserVoucher = async (req, res) => {
    try {
        let {customer_id,order_id,voucher_id,expirationDate,isActive} = req.body
        let data = new UserVoucherModel({
            customer_id,
            order_id,
            voucher_id,
            expirationDate,
            isActive,
        })
        await data.save();
        res.json({ message: "UserVoucher Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putUserVoucher = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await UserVoucherModel.findByIdAndUpdate(id, data);
        res.json({ message: "UserVoucher Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteUserVoucher = async (req, res) => {
    try {
        let { id } = req.params
        await UserVoucherModel.findByIdAndDelete(id);
        res.json({ message: "UserVoucher Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}