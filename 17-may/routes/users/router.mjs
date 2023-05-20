import { Router } from "express";

const userRouter = Router();


userRouter.get('/user-router', (req, res) => {
    res.send('Hello from user');
})


// ES5 Export
// module.export = userRouter;

// ES6 Export 
export { userRouter };
export default userRouter;

