FROM node:14.0.0-alpine3.10
LABEL maintainer="Joalbert Andrés González <joalbertgonzalez@gmail.com>"
LABEL version="1.0.0"
 
# -U, --update-cache    Update the repository cache
RUN apk add --update-cache && \
    rm -rf /var/cache/apk/*

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
ENV INSTALL_PATH /myapp
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# Start the main process.
CMD ["yarn", "start"]

