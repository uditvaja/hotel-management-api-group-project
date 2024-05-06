
import express from "express"
import { deleteCustomerReward, getCustomerReward, getCustomerRewards, postCustomerReward, putCustomerReward } from "../controllers/customerRewards.controller.js";
let customerRewardsRoutes = express()

customerRewardsRoutes.get('/', getCustomerRewards);
customerRewardsRoutes.get('/:id', getCustomerReward);
customerRewardsRoutes.post('/', postCustomerReward);
customerRewardsRoutes.put('/:id', putCustomerReward);
customerRewardsRoutes.delete('/:id', deleteCustomerReward);

export default customerRewardsRoutes;