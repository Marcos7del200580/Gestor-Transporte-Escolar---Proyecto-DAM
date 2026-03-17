import { Checkbox, Form, Input,Button} from "antd"
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
export const LoginForm = () => {

 const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


  return (
    <div>
       <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Correo Electronico"
      name="email"
      rules={[{ required: true, message: 'Por favor introduzca su correo electronico' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Contraseña"
      name="password"
      rules={[{ required: true, message: 'Por favor introduzca su contraseña' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form> 
    </div>
  )
}
