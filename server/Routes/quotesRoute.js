const express = require("express");
const { QuoteUser, GetQuotes, SearchQuotes, UpdateQuotes, GetUpdateQuote, DeleteQuotes } = require("../controllers/quoteController");

const router = express.Router();

router.post("/quotadmin", QuoteUser);

router.get("/getquotes",GetQuotes);

router.get("/searchquotes/:key",SearchQuotes);

router.get("/getupdatequotes/:id",GetUpdateQuote)

router.put("/updatequotes/:id",UpdateQuotes);

router.delete("/remove/:id",DeleteQuotes)

module.exports=router;