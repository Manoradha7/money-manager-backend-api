import express from 'express';
const router = express.Router();
import { auth } from '../auth.js';
import {getExpense,addExpense,deleteExpense} from '../helper.js'

router.route('/expense').post(auth,async(req,res)=>{
    const data=req.body;
    await addExpense(data);
    res.status(200).send("Transaction Added Successfully")
})
router.route('/expense/:email').get(auth,async(req,res)=>{
    const {email} = req.params;
    const expenses = await getExpense(email);
    res.status(200).send(expenses)
})
router.route('/expense/:id').delete((req,res)=>{
    const {id } = req.params;
    deleteExpense(id);
    res.status(200).send({Message:"Transaction Deleted Successfully"})
})
export const transactionRouter = router;