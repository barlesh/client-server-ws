FROM ubuntu:kinetic

RUN apt-get update
RUN apt-get upgrade -y

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash && \
    apt-get install -y nodejs build-essential npm

# RUN /usr/bin/npm install ws
# RUN /usr/bin/npm install node-static
 
 
# ENTRYPOINT ["/usr/bin/node", "./server.js"]