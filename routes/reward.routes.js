
import express from "express"
import { deleteReward, getReward, getRewards, postReward, putReward } from "../controllers/reward.controller.js";
let rewardRoutes = express()

rewardRoutes.get('/', getRewards);
rewardRoutes.get('/:id', getReward);
rewardRoutes.post('/', postReward);
rewardRoutes.put('/:id', putReward);
rewardRoutes.delete('/:id', deleteReward);

export default rewardRoutes;