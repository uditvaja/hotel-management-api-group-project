import mongoose from "mongoose";


const onlineOrderSchema = new mongoose.Schema({
    cash: {
        type: Boolean,
    },
    online: {
        type: Boolean,
    },
    order_menu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderMenu"
    },
    customer_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    }

});

const OnlineOrderModel = mongoose.model("OnlineOrder", onlineOrderSchema);

export default OnlineOrderModel
