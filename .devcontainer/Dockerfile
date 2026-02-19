# Use a HUGU included image from docker hub
FROM alpine
RUN apk update && apk add go git hugo

# Set the working directory to /src
WORKDIR /workspace

# Copy the rest of the application code into the container
# Keep in mind that we have a .dockerignore file within our root.


# Expose port 1313 for the HUGO app
EXPOSE 1313

# Start the HUGU app when the container starts
CMD ["hugo", "server", "--bind", "]