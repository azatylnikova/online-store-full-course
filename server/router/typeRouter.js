const Router = require('express') //// Получаем роутер из экспресса
const router = new Router(); //// Создаем обьект этого роутера
const typeController = require('../controllers/typeController')////  Импортируем контроллер


router.post('/', typeController.create);
router.get('/', typeController.getAll)

module.exports = router//// экспортируем этот роутер