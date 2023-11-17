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
      res.status(200).json({
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
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
