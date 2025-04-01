FROM php:7.4-apache

# Sao chép mã nguồn vào container
COPY ./src /var/www/html/
chmod -R 755 ./src/images
# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80