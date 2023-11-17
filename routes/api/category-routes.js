const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
          require: false
        }
      ]
    });

    if(!categoryData.length) {
      res.status(404).json({
        message: 'No categories found.'
      });
      return;
    }

    const categories = categoryData.map((category) => category.get({ plain: true }));

    res.status(200).json({
      categories
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          require: false
        }
      ]
    });

    if(!categoryData) {
      res.status(404).json({
        message: 'Requested category not found.'
      });
      return;
    }

    const category = categoryData.get({ plain: true });

    res.status(200).json({
      category
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({
      newCategory
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json({
      updatedCategory
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json({
      deletedCategory
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
