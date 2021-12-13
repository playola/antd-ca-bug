# Ant Design bug: Missing Catalan (ca_ES) translation key: "Form.optional"

## Getting Started

```sh
git clone https://github.com/playola/antd-ca-bug.git

cd antd-ca-bug

npm install

npm start
```

See http://localhost:3000.

## How to reproduce it

You will see that (optional) label for the Form.Item when locale is set as
"ca_ES" is translated to English because "Form.optional" translation key is
missing for Catalan.

If you set the locale as "es_ES" you will see that it translate it properly.

## Expected translations

Default: "(optional)"
Spanish (es_ES): "(opcional)"
Catalan (ca_ES): "(opcional)" <-- missing
