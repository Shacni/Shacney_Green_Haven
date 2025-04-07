def read_and_write_file():
    try:
        filename = input("Enter the filename to read from: ")
        with open(filename, 'r') as file:
            content = file.read()

        # Modify content (example: convert to uppercase)
        modified_content = content.upper()

        # Write to a new file
        new_filename = "modified_" + filename
        with open(new_filename, 'w') as new_file:
            new_file.write(modified_content)

        print(f"Modified content written to {new_filename}")

    except FileNotFoundError:
        print("Error: File not found.")
    except IOError:
        print("Error: Could not read/write file.")

# Run the function
read_and_write_file()
