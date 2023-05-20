import { Router } from "express";


// Export and object named userRouter
export const userRouter = Router();


userRouter.get('/user-router', (req, res, next) => {
    // res.send
    // res.json,
    // res.end,
    // res.render
    res.send('Hello from user');

})

export const x = 5;
export const y = 5;
export const z = 5;
export const a = 5;

// ES5 Export
// module.exports = userRouter;
// module.exports.userRouter = userRouter

// ES6 Export
// export default userRouter : export one object as the default         -- 1
// export { userRouter }                                                -- 2
