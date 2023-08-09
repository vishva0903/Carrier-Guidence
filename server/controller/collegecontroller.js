const College = require("../model/courseschema")
module.exports = {
    addcollege: async (req, res) => {
        const { collegeName, place, address, contactNumber, email, courses, courseStudied, category } = req.body;
        try {
            const result = await College.create({
                collegeName,
                place,
                address,
                contactNumber,
                email,
                courses,
                courseStudied,
                category,
            });
            res.status(200).json({ result });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    getcollege: async (req, res) => {
        const id = req.params.id
        try {
            const result2 = await College.find()
            res.status(200).json({ result2 });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    
    getcollegebyid: async (req, res) => {
        const id = req.params.id
        try {
            const result3 = await College.findById(id)
            res.status(200).json({ result3 });
        }
        catch (err) {
            res.status(400).json({ err });
        }


    },
    updatecollege: async (req, res) => {
        const id = req.params.id
        try {
            await College.findByIdAndUpdate(id, {
                collegeName: req.body.collegeName,
                place: req.body.place,
                address: req.body.address,
                contactNumber: req.body.contactNumber,
                email: req.body.email,
                courses: req.body.courses,
                courseStudied: req.body.courseStudied,
                category:req.body.category,
            });
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },
    deletecollege: async (req, res) => {
        const id = req.params.id
        try {
            await College.findByIdAndDelete(id)
            res.status(200).json("success");
        }
        catch (err) {
            res.status(400).json({ err });
        }

    },
}

