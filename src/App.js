import { useState } from 'react';
import { ConfigProvider, Form, Input, Button } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import caES from 'antd/lib/locale/ca_ES';
import "antd/dist/antd.css";

const locales = {
  ES: esES,
  CA: caES,
};

const App = () => {
  const [form] = Form.useForm();

  const [locale, setLocale] = useState(locales.CA);

  return (
    <ConfigProvider locale={locale}>
      <Form form={form} requiredMark="optional" style={{ padding: 64 }}>
        <Form.Item label="Field A" required>
          <Input placeholder="Required field" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="Optional field" />
        </Form.Item>
        <Button type="primary" onClick={(() => setLocale(locales.ES))}>
          Set to Spanish (es_ES)
        </Button>
        <Button type="secondary" onClick={(() => setLocale(locales.CA))}>
          Set to Catalan (ca_ES)
        </Button>
      </Form>
    </ConfigProvider>
  );
};

export default App;
