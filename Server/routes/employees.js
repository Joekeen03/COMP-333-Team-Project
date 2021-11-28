const router = require('express').Router();
let Employee = require('../models/employee.model');

// Fetch all employees
router.route('/').get((req, res) => {
    Employee.find().select("name pay").then(employees => res.json(employees))
    .catch(err => res.status(400). json('Error: ' + err));
});

// Create new employee
router.route('/create').post((req, res) => {
		var r = req.body;
    const name = r.name;
		const pay = r.pay;
    const payType = r.payType;
    const wage = r.wage;
		const attend = r.attend;
		const schedule = r.schedule;
		const position = r.position;
		const address = r.pay;
		const test = r.test
    const newEmployee = new Employee({
        name,
        payType,
        pay,
				position,
        address,
				attend,
        schedule,
				test,
    });

    newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });

// Fetch/delete a specific employee
// TODO: Handle getting attendance records
router.route('/:id').get((req, res) => {7
    Employee.findById(req.params.id).then(employee => res.json(employee)).catch(err => res.status(400).json('Error: ' + err))
    });

// TODO: Handle deleting attendance records
router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id).then(() => res.json('Employee deleted')).catch(err => res.status(400).json('Error: ' + err))
    });

// Update a specific employee
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id).then(employee => {
      // This is not an ideal way to handle this, but I don't know how to make document.prototype.set apply recursively.
      // Ideally, if I call employee.set(req.body), it would only modify the lowest-level paths - e.g. employee.position.title = req.position.title
      // However, as it is, if I call employee.set(req.body), it will just replace the properties of employee - there doesn't seem to be an
      // option for recursion. So the entire employee.position property would be replaced, instead of just updating changed properties.
        if (req.body.position)
        {
          employee.position.set(req.body.position);
          delete req.body.position;
        }
        // TODO: Handle attendance record
        employee.set(req.body);

        console.log(employee.modifiedPaths());
        employee.save().then(() => res.json('Employee updated')).catch(err => res.status(400).json('Error: ' + err))
    }).catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;