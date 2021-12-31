const router = require('express').Router();
const { Skill } = require("../model");
const checkAuth = require('../config/auth');


router.get("/:id", async (req, res) => {
    try {
        let userSkills = await Skill.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.json(userSkills)
    } catch (err) {
        if (err) { throw err }
    }
})

router.post("/", checkAuth, async (req, res) => {
    try {
        console.log(req.session.userId)
       const newSkill = await Skill.findOrCreate({
            where: { name: req.body.name },
            defaults: { name:req.body.name, description: req.body.description, userId: req.body.userId }
        })
        res.json(newSkill)
    } catch (err) {
        if (err) { throw err }
    }
})

router.put("/:id", checkAuth, async (req, res) => {
    try {
       let updateSkill = await Skill.update(req.body,{
            where: {
                id: req.params.id
            },
        })
        res.json(updateSkill)
    } catch (err) {
        if (err) { throw err }
    }
})

router.delete("/:id", checkAuth, async (req, res) => {
    try {
        let deleteSkill = await Skill.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(deleteSkill)
    } catch (err) {
        if (err) { throw err }
    }
})
module.exports = router;