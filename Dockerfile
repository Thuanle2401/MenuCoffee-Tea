FROM php:7.2-apache

# Đặt thư mục làm việc
WORKDIR /var/www/html

# Sao chép mã nguồn vào container
COPY ./src .

# Phân quyền cho thư mục
RUN chmod -R 755 /var/www/html

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80