FROM php:7.2-apache

# Sao chép mã nguồn vào container
COPY ./src /var/www/html/
COPY ./icon /var/www/html/
RUN chmod -R 755 /var/www/html

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80