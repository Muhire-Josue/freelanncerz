language: node_js

node_js:
  - 12

services:
- postgresql
- redis-server

before_script:
- psql -c "create database freelancerz_db_test;" -U postgres

install:
  - npm install
  
script:
  - npm test
 
notification:
  - email: false

after_success:
  - npm run coverage
