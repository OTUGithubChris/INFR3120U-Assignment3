var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Assignment = require('../models/assignmentModel');
let AssignmentController = require('../controllers/Assignment_Tracker')
/* Get route for the Bio Books list */

// Read Operation
router.get('/', AssignmentController.DislayAssignmentlist);

/* Get route for Add Book page --> Create */
router.get('/add', AssignmentController.AddAssignment); 

/* Post route for Add Book page --> Create */
router.post('/add', AssignmentController.ProcessAssignment);

/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', AssignmentController.EditAssignment);

/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', AssignmentController.ProcessEditAssignment);

/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', AssignmentController.DeleteAssignment);
 module.exports = router;