import { Router } from "express";

const router = new Router();

router.get('/test', (req, res) => {
    res.send('Hello');
});

router.get('/view', (req, res) => {
    let data = {
        title: "Page Title"
    }
    res.set('Content-Type', 'text/html');
    res.render('index.html', data);
})
export default router;