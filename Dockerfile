FROM php:7.2-apache

# Đặt thư mục làm việc
WORKDIR /var/www/src

# Sao chép mã nguồn vào container
COPY ./src /var/www/src
COPY ./icon /var/www/html/icon

# Cấu hình Apache để sử dụng /var/www/src làm document root
RUN sed -i 's|/var/www/html|/var/www/src|g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's|/var/www/html|/var/www/src|g' /etc/apache2/apache2.conf

# Phân quyền cho thư mục
RUN chmod -R 755 /var/www/src

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80