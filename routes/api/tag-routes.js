const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    });

    if(!tagData.length) {
      res.status(404).json({
        message: 'No tags found.'
      });
      return;
    }

    const tags = tagData.map((tag) => tag.get({ plain: true }));

    res.status(200).json({
      tags
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    });

    if(!tagData) {
      res.status(404).json({
        message: 'Requested tag not found.'
      });
      return;
    }

    const tag = tagData.get({ plain: true });

    res.status(200).json({
      tag
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json({
      newTag
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);

    if(!tagData) {
      res.status(404).json({
        message: 'Requested tag not found.'
      });
      return;
    }

    tagData.tag_name = req.body.tag_name;
    await tagData.save();

    res.status(200).json({
      message: 'Successfully updated tag name.'
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!deletedTag) {
      res.status(404).json({
        message: 'Requested tag not found.'
      });
      return;
    }

    await ProductTag.destroy({
      where: {
        tag_id: req.params.id
      }
    });

    res.status(200).json({
      message: 'Successfully deleted tag.'
    });
  }
  catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
