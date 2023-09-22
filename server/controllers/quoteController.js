const quoteModel = require("../Modals/quoteModel");
const mongoose = require("mongoose");
// quote to databse
const QuoteUser = async (req, res) => {
  try {
    const { email, name, phone, city, requirement } = req.body;
    console.log(email, name, phone, city, requirement);
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!email || !name || !phone || !city || !requirement) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message:
          "Phone number must be exactly 10 digits and contain only numbers",
      });
    }

    if (!nameRegex.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name cannot contain numbers or special characters",
      });
    }

    const quoteuser = new quoteModel({
      email,
      name,
      phone,
      city,
      requirement,
    });

    const response = await quoteuser.save();
    // Send a success response if everything is fine
    res.status(200).json({
      success: true,
      message: "Quote saved successfully",
      quote: response,
    });
  } catch (error) {
    // Handle errors gracefully
    console.error(error);
    res.status(500).json({
      success: false,
      message: "All fields are mendatory please enter valid data",
      error,
    });
  }
};

// getting all quotes
const GetQuotes = async (req, res) => {
  try {
    const quotes = await quoteModel.find();
    if (quotes.length > 0) {
      res.status(200).json(quotes);
    } else {
      res.status(404).json({ message: "No quotes found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching quotes" });
  }
};

//search
const SearchQuotes = async (req, res) => {
  try {
    const searchKey = req.params.key;

    const searchResults = await quoteModel.find({
      $or: [
        { name: { $regex: searchKey, $options: "i" } }, // Case-insensitive search
        { email: { $regex: searchKey, $options: "i" } },
        { phone: { $regex: searchKey, $options: "i" } },
        { city: { $regex: searchKey, $options: "i" } },
        { requirement: { $regex: searchKey, $options: "i" } },
      ],
    });
    console.log(searchResults)
    if (searchResults.length===0) {
      res.status(400).send({
        success: false,
        message: "No deatils found",
      });
    }else{
      res.status(200).send({
        success: true,
        searchResults,
      });
    }
  } catch (error) {
    console.error("Error searching quotes:", error); // Log the specific error for debugging
    res.status(500).json({ error: "An error occurred while searching quotes" });
  }
};

//get update quotes
const GetUpdateQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const findQuote = await quoteModel.findOne({ _id: quoteId });

    if (findQuote) {
      res.status(200).json(findQuote);
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the quote" });
  }
};

//update quotes
const UpdateQuotes = async (req, res) => {
  try {
    const quoteId = req.params.id.trim(); // Remove any leading/trailing whitespaces
    console.log(quoteId);

    if (!mongoose.Types.ObjectId.isValid(quoteId)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    const updateResult = await quoteModel.updateOne(
      { _id: quoteId },
      { $set: req.body }
    );

    console.log(updateResult);
    if (updateResult.modifiedCount > 0) {
      res
        .status(200)
        .json({
          success: true,
          message: "Quote updated successfully",
          updateResult,
        });
    } else {
      res.status(404).json({ success: false, message: "Quote not updated" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the quote",
      error: error.message,
    });
  }
};

//delete quotes
const DeleteQuotes = async (req, res) => {
  try {
    const quoteId = await req.params.id;
    console.log(quoteId);
    const deleteResult = await quoteModel.deleteOne({ _id: quoteId });

    if (deleteResult.deletedCount > 0) {
      res
        .status(200)
        .json({ message: "Quote deleted successfully", success: true });
    } else {
      res.status(404).json({ message: "Quote not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the quote" });
  }
};

module.exports = {
  QuoteUser,
  GetQuotes,
  SearchQuotes,
  GetUpdateQuote,
  UpdateQuotes,
  DeleteQuotes,
};
