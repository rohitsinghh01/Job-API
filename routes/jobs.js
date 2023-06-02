const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs);
router
  .route("/:id")
  .get(getJob)
  .post(createJob)
  .patch(updateJob)
  .delete(deleteJob);

module.exports=router