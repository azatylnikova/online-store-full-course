const Router = require('express') //// Получаем роутер из экспресса
const router = new Router(); //// Создаем обьект этого роутера
const deviceController = require('../controllers/deviceController')////  Импортируем контроллер


router.post('/', deviceController.create);
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


module.exports = router//// экспортируем этот роутер