FROM php:7.4-apache

# Sao chép mã nguồn vào container
COPY ./src /var/www/html/
RUN chmod -R 750 /var/www/html

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80