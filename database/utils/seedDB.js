const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "idk? somewhere"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "idk? somewhere"
	});
	const dummy_campus3 = await Campus.create({
		name: "Fordham",
		description: "This is a school in NYC.",
		address: "idk? somewhere"
	});
	const dummy_campus4 = await Campus.create({
		name: "Cooper Union",
		description: "This is a school in NYC.",
		address: "idk? somewhere"
	});
	const dummy_campus5 = await Campus.create({
		name: "Caltech",
		description: "This is a school in CA.",
		address: "idk? somewhere"
	});

	const dummy_student1 = await Student.create({
			firstname: "Jane",
      		lastname: "Shmoney",
			email: "Jane@gmail.com"
		});
	const dummy_student2 = await Student.create({
			firstname: "Joe",
      		lastname: "Shmo",
			email: "Joe@gmail.com",
			gpa: 3.4
		});
	const dummy_student3 = await Student.create({
			firstname: "Bob",
      		lastname: "Builder",
			email: "Bob@gmail.com"			  
			  
		});
	const dummy_student4 = await Student.create({
			firstname: "Margret",
      		lastname: "Thatcher",
			email: "Margret@gmail.com"
		});
	const dummy_student5 = await Student.create({
			firstname: "Elon",
      		lastname: "Bezos",
			email: "Elon@gmail.com",
			gpa: 3.9
		});
	const dummy_student6 = await Student.create({
			firstname: "Jeff",
      		lastname: "Musk",
			email: "Jeff@gmail.com",
			gpa: 3.9
		});
	const dummy_student7 = await Student.create({
			firstname: "Naruto",
      		lastname: "Uzamaki",
			email: "Naruto@gmail.com",
			gpa: 2.8
		});

	await dummy_student1.setCampus(dummy_campus5);
	await dummy_student2.setCampus(dummy_campus);
	await dummy_student3.setCampus(dummy_campus2);
	await dummy_student4.setCampus(dummy_campus4);
	await dummy_student5.setCampus(dummy_campus3);
	await dummy_student6.setCampus(dummy_campus3);
	await dummy_student7.setCampus(dummy_campus);
	
}

module.exports = seedDB;