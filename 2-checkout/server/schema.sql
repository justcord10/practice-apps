DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

-- CREATE necessary tables below here
CREATE TABLE responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(150),
  user_name VARCHAR(150),
  email VARCHAR(150),
  user_password VARCHAR(150),
  f1_is_filled BOOLEAN DEFAULT 0,
  shipping_address_line1 VARCHAR(150),
  shipping_address_line2 VARCHAR(150),
  city VARCHAR(150),
  us_state VARCHAR(150),
  zip_code VARCHAR(150),
  phone_number VARCHAR(150),
  f2_is_filled BOOLEAN DEFAULT 0,
  credit_card_number VARCHAR(150),
  expiry VARCHAR(150),
  cvv VARCHAR(150),
  billing_zip_code VARCHAR(150),
  f3_is_filled BOOLEAN DEFAULT 0,
  final_form_is_submitted BOOLEAN DEFAULT 0



);