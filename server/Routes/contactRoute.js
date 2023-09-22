const express=require("express");
const { ContactEntry, ContactDetails, SearchContact, deleteContact, } = require("../controllers/contactController");
 const router=express.Router();

 router.post("/fillcontact",ContactEntry);
 router.get("/getcontact",ContactDetails);
 router.delete("/deletecontact/:id",deleteContact);
 router.get("/searchcontact/:key",SearchContact);


 module.exports=router;
 