FROM php:7.2-apache

# Sao chép mã nguồn vào container
COPY ./src /var/www/html/src
COPY ./icon /var/www/html/icon
RUN chmod -R 755 /var/www/html/src

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80