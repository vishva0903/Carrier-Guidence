const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load User model
const User = require("../model/userschema");
// Load input validation
const SignupValidation = require("../validator/signup");
const SigninValidation = require("../validator/signin");
const { logout } = require("../../client/src/store/auth");
module.exports = {
  //  ---------------------------------------- //signup method to add a new user//--------------------------- //

  signup: async (req, res) => {
    const { firstName, lastName, email, password, courseStudied } =
      req.body;

    try {
      // hashing password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // checking the user is existed or not with email
      const userExist = await User.findOne({ email });
      if (userExist) {
        res.status(400).json({ message: "User already Existed" });
      }
      await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        courseStudied,
        role: "user",
      });
      res.status(200).json({ message: "User added to mongodb succesfully" });
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
      console.log(err)
    }
  },
  //  ---------------------------------------- //signin method to add a new user//--------------------------- //
  signin: async (req, res) => {
    const { email, password } = req.body;
    const { errors, isValid } = SigninValidation(req.body);

    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await User.findOne({ email }).then(async (user) => {
          if (!user) {
            errors.email =
              "Email does not exist ! please Enter the right Email or You can make account";
            res.status(404).json(errors);
          }
          // Compare sent in password with found user hashed password
          const passwordMatch = bcrypt.compareSync(password, user.password);
          if (!passwordMatch) {
            errors.password = "Wrong Password";
            res.status(404).json(errors);
          } else {
            // generating a token and storing it in a cookie
            const token = jwt.sign({ _id: user._id, role: user.role }, "sooraj_DOING_GOOD", {
              expiresIn: "8h",
            });
            const options = {
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
              httpOnly: true,
              sameSite: "lax",
            };

            const data = {
              id: user._id,
              role: user.role
            }
            // console.log(data);
            // res.cookie("Authorization", token, options);
            res.status(201).json({
              token,
              data
            });
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },


  verifyToken: async (req, res) => {
    try {
      const token = req.body.token;
      const decoded = jwt.verify(token, "sooraj_DOING_GOOD")
      res.status(200).json(decoded)

    } catch (error) {
      return res.status(401).json({
        message: 'Auth Failed'
      });
    }

  },

  getUser: async (req, res) => {
    const id = req.params.id;
    console.log(id, "id vanno");
    try {
      const userdata = await User.findById(id);
      const data = {
        firstName: userdata.firstName,
        LastName: userdata.lastNameName,
        email: userdata.email,

      }
      res.status(200).json(data)

    } catch (error) {

    }
  }
}