const Course = require("../model/courseschema")
module.exports = {
    addCourse: async (req, res) => {
        const { courseName, duration, courseFee, subjects } = req.body;
        const { id } = req.params; // Fixed the typo
        console.log(id)

        try {
            // Find the college document with the given ID
            const college = await Course.findById(id);

            if (!college) {
                return res.status(404).json({ error: 'College not found' });
            }

            // Create a new course document
            const newCourse = new Course({
                courseName,
                duration,
                courseFee,
                subjects,
                college: college._id // Set the reference to the college
            });

            // Save the course document
            const savedCourse = await newCourse.save();

            // Add the course ID to the college's courses array
            college.courses.push(savedCourse._id);
            await college.save();

            res.status(200).json(savedCourse);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // getcollege: async (req, res) => {
    //     const id = req.params.id
    //     try {
    //         const result2 = await College.find()
    //         res.status(200).json({ result2 });
    //     }
    //     catch (err) {
    //         res.status(400).json({ err });
    //     }


    // },

    // getcollegebyid: async (req, res) => {
    //     const id = req.params.id
    //     try {
    //         const result3 = await College.findById(id)
    //         res.status(200).json({ result3 });
    //     }
    //     catch (err) {
    //         res.status(400).json({ err });
    //     }


    // },
    // updatecollege: async (req, res) => {
    //     const id = req.params.id
    //     try {
    //         await College.findByIdAndUpdate(id, {
    //             Name: req.body.Name
    //         });
    //         res.status(200).json("success");
    //     }
    //     catch (err) {
    //         res.status(400).json({ err });
    //     }

    // },
    // deletecollege: async (req, res) => {
    //     const id = req.params.id
    //     try {
    //         await College.findByIdAndDelete(id)
    //         res.status(200).json("success");
    //     }
    //     catch (err) {
    //         res.status(400).json({ err });
    //     }

    // }
}

