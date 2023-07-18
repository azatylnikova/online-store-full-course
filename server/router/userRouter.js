const Router = require('express') //// Получаем роутер из экспресса
const router = new Router(); //// Создаем обьект этого роутера
const userController = require('../controllers/userControllrt')////  Импортируем контроллер


router.post('/registration', userController.registration);
router.post('/login', userController.login)
router.get('/auth' , userController.check)

module.exports = router//// экспортируем этот роутер