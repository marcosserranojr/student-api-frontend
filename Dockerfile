FROM registry.access.redhat.com/ubi8/nginx-120

ENV NGINX_VERSION=1.20

# Add application sources
ADD configs/nginx.conf "${NGINX_CONF_PATH}"
ADD configs/nginx-default-cfg/*.conf "${NGINX_DEFAULT_CONF_PATH}"
ADD configs/nginx-cfg/*.conf "${NGINX_CONFIGURATION_PATH}"
ADD ./app ./

# Run script uses standard ways to run the application
CMD nginx -g "daemon off;"