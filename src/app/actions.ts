"use server";

import fs from "fs";
import path from "path";

export async function submitCareerApplication(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const reason = formData.get("reason") as string;
    const resume = formData.get("resume") as File | null;

    // We will store applications in a local "applications" folder at the project root
    const dir = path.join(process.cwd(), "applications");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let resumeFilename = null;
    if (resume && resume.size > 0 && resume.name !== "undefined") {
      resumeFilename = `${Date.now()}-${resume.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const buffer = Buffer.from(await resume.arrayBuffer());
      fs.writeFileSync(path.join(dir, resumeFilename), buffer);
    }

    const applicationData = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      fullName,
      email,
      role,
      reason,
      resume: resumeFilename
    };

    const dataFile = path.join(dir, "submissions.json");
    let existingData = [];
    if (fs.existsSync(dataFile)) {
      try {
        existingData = JSON.parse(fs.readFileSync(dataFile, "utf8"));
      } catch (e) {
        existingData = [];
      }
    }
    existingData.push(applicationData);
    fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 2));

    return { success: true };
  } catch (error) {
    console.error("Failed to save application:", error);
    return { success: false, error: "Failed to submit. Please try again." };
  }
}
