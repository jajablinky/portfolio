const express = require('express');
const router = express.Router();
const data = require('../data.json')
const { projects } = data;

router.get('/:id', (req,res)=>{
    const { id } = req.params;
    const name = projects[id].project_name;
    const description = projects[id].description;
    const tech = projects[id].technologies;
    const liveLink = projects[id].live_link;
    const github = projects[id].github_link;
    const img = projects[id].image_urls;
    const templateData = { name, description, tech, liveLink, github, img };

    res.render('project', templateData);
});

module.exports = router;