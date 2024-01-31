const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const profilesRouter = express.Router();
const { isValidDate } = require("../auth/utils.js");
// GET all user profiles
profilesRouter.get("/", async (req, res) => {
  try {
    const profiles = await prisma.profiles.findMany();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).send(error.message);
  }
});
// GET a random user profile
profilesRouter.get("/random", async (req, res) => {
  try {
    // Fetch the count of all profiles
    const totalProfiles = await prisma.profiles.count();
    if (totalProfiles === 0) {
      return res.status(404).send("No profiles available");
    }
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * totalProfiles);
    // Fetch one profile at the random index
    const [randomProfile] = await prisma.profiles.findMany({
      take: 1,
      skip: randomIndex,
    });
    res.json(randomProfile);
  } catch (error) {
    console.error("Error fetching random profile:", error);
    res.status(500).send(error.message);
  }
});
// get users profile by profile id
profilesRouter.get("/:profileId", async (req, res) => {
  const { profileId } = req.params;
  try {
    const profile = await prisma.profiles.findUnique({
      where: { profile_id: profileId },
    });
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// POST a new user profile
profilesRouter.post("/", async (req, res) => {
  try {
    const {
      user_id,
      name,
      username,
      birthdate,
      gender,
      orientation,
      height_ft,
      height_in,
      body_type,
      ethnicity,
      smokes,
      drinks,
      profession,
      current_location,
      hometown,
      looking_for,
      age_range_preference,
      picture_url,
      bio,
    } = req.body;
    // Validate the birthdate format
    if (!isValidDate(birthdate)) {
      return res.status(400).send("Invalid birthdate format. Use YYYY-MM-DD.");
    }
    // Convert birthdate to JavaScript Date object
    const formattedBirthdate = new Date(birthdate);
    const smokesBool = smokes === "yes";
    const drinksBool = drinks === "yes";
    // Create a new profile
    const newProfile = await prisma.profiles.create({
      data: {
        user_id, // Directly use the user_id from the request
        name,
        username,
        birthdate: formattedBirthdate,
        gender,
        orientation,
        height_ft,
        height_in,
        body_type,
        ethnicity,
        smokes: smokesBool,
        drinks: drinksBool,
        profession,
        current_location,
        hometown,
        looking_for,
        age_range_preference,
        picture_url,
        bio,
      },
    });
    // Send the created profile as a response
    res.status(201).json(newProfile);
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).send(error.message);
  }
});
// PUT to update a user's profile by user_id
profilesRouter.put("/:profileId", async (req, res) => {
  const { profileId } = req.params; // Get the profileId from the route params
  const {
    user_id,
    name,
    username,
    birthdate,
    gender,
    orientation,
    height_ft,
    height_in,
    body_type,
    ethnicity,
    smokes,
    drinks,
    profession,
    current_location,
    hometown,
    looking_for,
    age_range_preference,
    picture_url,
    bio,
  } = req.body;
  console.log();
  try {
    // Ensure that the profile exists
    const existingProfile = await prisma.profiles.findUnique({
      where: { profile_id: profileId }, // Use the dynamically retrieved profileId
    });
    if (!existingProfile) {
      console.log("Profile not found");
      return res.status(420).send("Profile not found");
    }
    const smokesBool = smokes === "yes";
    const drinksBool = drinks === "yes";
    // Update the profile data
    const updatedProfile = await prisma.profiles.update({
      where: { profile_id: profileId }, // Use the dynamically retrieved profileId
      data: {
        name, // Update the name field
        username,
        gender,
        orientation,
        height_ft,
        height_in,
        body_type,
        ethnicity,
        smokes: smokesBool,
        drinks: drinksBool,
        profession,
        current_location,
        hometown,
        looking_for,
        age_range_preference,
        picture_url,
        bio,
      },
    });
    res.json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a user's profile by user_id
profilesRouter.delete("/:userId", async (req, res) => {
  try {
    await prisma.profiles.delete({
      where: { user_id: userId },
    });
    res.status(204).send("Profile deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});
module.exports = profilesRouter;