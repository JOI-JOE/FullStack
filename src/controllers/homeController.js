import db from "../models/index";

// xử lý bất đồng bộ
let getHomepage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("home.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error); // TCPV
  }
};

module.exports = {
  getHomepage,
};
