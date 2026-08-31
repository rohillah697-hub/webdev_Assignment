// File Manager using fs module

const fs = require("fs");

const fileName = "student.txt";

// 1. CREATE FILE

console.log("Creating file...");

fs.writeFile(
    fileName,
    "Hello! This is my Smart Utility Toolkit.\n",
    (err) => {

        if (err) {
            console.log("Error creating file:", err);
            return;
        }

        console.log("File created successfully.");

        // 2. READ FILE

        console.log("Reading file...");

        fs.readFile(fileName, "utf8", (err, data) => {

            if (err) {
                console.log("Error reading file:", err);
                return;
            }

            console.log("File Content:");
            console.log(data);

            // 3. UPDATE FILE

            console.log("Updating file...");

            fs.appendFile(
                fileName,
                "This line was added using appendFile().\n",
                (err) => {

                    if (err) {
                        console.log("Error updating file:", err);
                        return;
                    }

                    console.log("File updated successfully.");

                    // Read updated content

                    fs.readFile(fileName, "utf8", (err, updatedData) => {

                        if (err) {
                            console.log("Error:", err);
                            return;
                        }

                        console.log("Updated File Content:");
                        console.log(updatedData);

                        // 4. DELETE FILE

                        console.log("Deleting file...");

                        fs.unlink(fileName, (err) => {

                            if (err) {
                                console.log("Error deleting file:", err);
                                return;
                            }

                            console.log("File deleted successfully.");
                        });
                    });
                }
            );
        });
    }
);