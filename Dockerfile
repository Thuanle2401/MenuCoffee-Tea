FROM php:7.4-apache

# Sao chép mã nguồn vào container
COPY . /var/www/html/

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80