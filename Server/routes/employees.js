const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
    Employee.find().then(employees => res.json(employees))
    .catch(err => res.status(400). json('Error: ' + err));
});

router.route('/create').post((req, res) => {
		var r = req.body;
    const name = r.name;
		const basePay = r.basePay;
    const payType = r.payType;
<<<<<<< Updated upstream
=======
    const salaryWage = r.salaryWage;
    const hourlyWage = r.hourlyWage;
>>>>>>> Stashed changes
		const attend = r.attend;
		const schedule = r.schedule;
		const position = r.position;
		const address = r.pay;
		const test = r.test
    const newEmployee = new Employee({
        name,
        payType,
<<<<<<< Updated upstream
        pay,
=======
        basePay,
        salaryWage,
        hourlyWage,
				position,
        address,
>>>>>>> Stashed changes
				attend,
        schedule,
				position,
        address,
				test,
    });

    newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').get((req, res) => {7
    Employee.findById(req.params.id).then(employee => res.json(employee)).catch(err => res.status(400).json('Error: ' + err))
    });

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id).then(() => res.json('Employee deleted')).catch(err => res.status(400).json('Error: ' + err))
    });


router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id).then(employee => {
        employee.name = req.body.name;
        employee.pay = req.body.pay;

        employee.save().then(() => res.json('Employee updated')).catch(err => res.status(400).json('Error: ' + err))
    }).catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;